import { ApiProperty } from '@nestjs/swagger';

export class CreateTasksDto {
  @ApiProperty({ example: 5 })
  readonly count: number;
}

export class TasksDto {
  @ApiProperty({ example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' })
  readonly id: string;

  @ApiProperty({ example: 'Task formula' })
  readonly formula: string;

  @ApiProperty({ example: 'Task text' })
  readonly text: string;

  @ApiProperty({ example: 'Task answer' })
  readonly answer: string;
}
