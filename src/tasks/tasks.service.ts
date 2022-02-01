import { Injectable } from '@nestjs/common';

import { CreateTasksDto, TasksDto } from './dto/createTasksDto';
import { generateTasks } from 'src/utils/functionHelper';

@Injectable()
export class TasksService {
  async createTasks(dto: CreateTasksDto) {
    const arrayTasks: TasksDto[] = [];

    for (let i: number = 0; i < dto.count; i++) {
      arrayTasks.push(generateTasks());
    }

    return arrayTasks;
  }
}
