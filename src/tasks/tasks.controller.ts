import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TasksService } from './tasks.service';
import { CreateTasksDto, TasksDto } from './dto/createTasksDto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create tasks' })
  @ApiResponse({ status: 200, type: [TasksDto] })
  @Post('createArrayTasks')
  createArrayTasks(@Body() tasksDto: CreateTasksDto) {
    return this.tasksService.createTasks(tasksDto);
  }
}
