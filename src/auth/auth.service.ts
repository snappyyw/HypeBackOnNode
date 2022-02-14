import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UserDto, AuthUserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
import { validateEmail } from '../utils/functionHelper'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: AuthUserDto) {
    const user = await this.validateUser(userDto);

    return this.generateToken(user);
  }

  async registration(userDto: UserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);

    if (!userDto.email) {
      throw new HttpException(
        'Введите email',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!userDto.password) {
      throw new HttpException(
        'Введите password',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!userDto.name) {
      throw new HttpException(
        'Введите login',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (userDto.password.length < 7) {
      throw new HttpException(
        'Минимум 7 символов для password',
        HttpStatus.BAD_REQUEST,
      );
    }


    if (userDto.email.length > 50 ||  userDto.password.length > 50 || userDto.name.length > 50) {
      throw new HttpException(
        'Максимум 50 символов',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(!validateEmail(userDto.email)){
      throw new HttpException(
        'Неверный email',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id };

    return {
      token: this.jwtService.sign(payload),
      login: user.name,
    };
  }

  private async validateUser(userDto: AuthUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);

    if (!userDto.email) {
      throw new HttpException(
        'Введите email',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!userDto.password) {
      throw new HttpException(
        'Введите password',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (userDto.email.length > 50 ||  userDto.password.length > 50) {
      throw new HttpException(
        'Максимум 50 символов',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(!validateEmail(userDto.email)){
      throw new HttpException(
        'Неверный email',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!user) {
      throw new HttpException(
        'Такого пользователя нет',
        HttpStatus.BAD_REQUEST,
      );
    }



    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (passwordEquals) {
      return user;
    } else {
      throw new HttpException('Неверный пароль', HttpStatus.UNAUTHORIZED);
    }
  }
}
