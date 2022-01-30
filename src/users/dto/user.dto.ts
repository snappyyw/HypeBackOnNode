import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Email' })
  readonly email: string;

  @ApiProperty({ example: 'Name' })
  readonly name: string;

  @ApiProperty({ example: 'Password' })
  readonly password: string;
}
