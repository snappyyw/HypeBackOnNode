import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserDto, AuthUserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';


@ApiTags("Auth")
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post("/login")
  login(@Body() userDto: AuthUserDto){
    return this.authService.login(userDto)
  }

  @Post("/registration")
  registration(@Body() userDto: UserDto){
    return this.authService.registration(userDto)
  }

}
