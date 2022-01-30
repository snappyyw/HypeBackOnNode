import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateTasksDto } from './dto/createTasksDto';

@Injectable()
export class TasksService {
  async createTasks(dto: CreateTasksDto) {
    return [
      { id: uuidv4(), test: 123 },
      { id: uuidv4(), test: 321 },
      { id: uuidv4(), test: 456 },
    ];
  }
}
