import { Model } from 'sequelize-typescript';

interface ICreateTasks {
  count: bigint;
}

export class Tasks extends Model<ICreateTasks> {
  id: bigint;

  count: bigint;
}
