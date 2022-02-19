import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Email' })
  @IsString({ message: 'Email должен быть строкой' })
  @MinLength(1, { message: 'Email не може быть пустым' })
  @MaxLength(50, { message: 'Email не може содержать более 50 смволов' })
  @IsEmail({}, { message: 'Email некорректный' })
  readonly email: string;

  @ApiProperty({ example: 'Name' })
  @IsString({ message: 'Name должно быть строкой' })
  @MinLength(1, { message: 'Name не може быть пустым' })
  @MaxLength(50, { message: 'Name не може содержать более 50 смволов' })
  readonly name: string;

  @ApiProperty({ example: 'Password' })
  @IsString({ message: 'Password должно быть строкой' })
  @MinLength(7, { message: 'Password не може содежать менее 7 символов' })
  @MaxLength(50, { message: 'Password не може содержать более 50 смволов' })
  readonly password: string;
}

export class AuthUserDto {
  @ApiProperty({ example: 'Email' })
  @IsString({ message: 'Email должен быть строкой' })
  @MinLength(1, { message: 'Email не може быть пустым' })
  @MaxLength(50, { message: 'Email не може содержать более 50 смволов' })
  @IsEmail({}, { message: 'Email некорректный' })
  readonly email: string;

  @ApiProperty({ example: 'Password' })
  @IsString({ message: 'Password должно быть строкой' })
  @MinLength(7, { message: 'Password не може содежать менее 7 символов' })
  @MaxLength(50, { message: 'Password не може содержать более 50 смволов' })
  readonly password: string;
}
