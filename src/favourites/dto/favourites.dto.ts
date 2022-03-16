import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, IsInt } from 'class-validator';

export class AddFavouritesDto {
  @ApiProperty({ example: 'Formula' })
  @IsString({ message: 'Formula должен быть строкой' })
  @MinLength(1, { message: 'Formula не може быть пустым' })
  @MaxLength(100, { message: 'Formula не може содержать более 100 смволов' })
  readonly formula: string;

  @ApiProperty({ example: 'Text' })
  @IsString({ message: 'Text должно быть строкой' })
  @MinLength(1, { message: 'Text не може быть пустым' })
  @MaxLength(100, { message: 'Text не може содержать более 100 смволов' })
  readonly text: string;

  @ApiProperty({ example: 'Answer' })
  @IsString({ message: 'Answer должно быть строкой' })
  @MinLength(7, { message: 'Answer не може содежать менее 7 символов' })
  @MaxLength(100, { message: 'Answer не може содержать более 100 смволов' })
  readonly answer: string;

  @ApiProperty({ example: 'Id' })
  @IsString({ message: 'Id должно быть строкой' })
  @MinLength(1, { message: 'Id не може содежать менее 1 символов' })
  @MaxLength(100, { message: 'Id не може содержать более 100 смволов' })
  readonly id: string;

  readonly token: string;
}

export class PaginationDto {
  @ApiProperty({ example: 5 })
  @IsInt({ message: 'Formula должен быть строкой' })
  readonly count: number;

  @ApiProperty({ example: 5 })
  @IsInt({ message: 'Formula должен быть строкой' })
  readonly page: number;
}

export class TotalCountDto {
  @ApiProperty({ example: 5 })
  readonly totalCount: number;
}

export class DeleteDto {
  @ApiProperty({ example: 1 })
  readonly id: number;
}
