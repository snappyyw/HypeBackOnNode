import { Injectable } from '@nestjs/common';

import { CreateTasksDto, TasksDto } from './dto/createTasksDto';
import { generateTasks } from 'src/utils/functionHelper';

@Injectable()
export class TasksService {
  async createTasks(dto: CreateTasksDto) {
    const arrayTasks: TasksDto[] = [];
    const count = dto.count > 10 ? 10 : dto.count;

    for (let i: number = 0; i < count; i++) {
      arrayTasks.push(generateTasks());
    }

    return arrayTasks;
  }
}
