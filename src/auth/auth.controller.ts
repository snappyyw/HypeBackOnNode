import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserDto, AuthUserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Authorization' })
  @UsePipes(ValidationPipe)
  login(@Body() userDto: AuthUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  @ApiOperation({ summary: 'Registrations' })
  @UsePipes(ValidationPipe)
  registration(@Body() userDto: UserDto) {
    return this.authService.registration(userDto);
  }
}
