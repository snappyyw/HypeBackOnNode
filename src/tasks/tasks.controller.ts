import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TasksService } from './tasks.service';
import { CreateTasksDto, TasksDto } from './dto/createTasksDto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create tasks' })
  @ApiResponse({ status: 200, type: [TasksDto] })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Get('createArrayTasks')
  createArrayTasks(@Query() tasksDto: CreateTasksDto) {
    return this.tasksService.createTasks(tasksDto);
  }
}
