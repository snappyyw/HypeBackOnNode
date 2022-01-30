import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  controllers: [],
  providers: [TasksService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ec2-34-242-89-204.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'eotedefiefmofj',
      password:
        'c0be0f56c313fb05c0fe2f6a2fb8f9d6615067aeab5ed1606dcafa6400728d36',
      database: 'd5nm8umnf23q09',
      models: [User],
      autoLoadModels: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
