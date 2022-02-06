import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [TasksService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ec2-18-203-64-130.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'cxqairyiwxeids',
      password:
        '6397c999bd0fa8650cedfa21fdbadb51b1775d493f9620197c1f5ceda23ed0db',
      database: 'd1jlo8a580if9o',
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
    AuthModule,
  ],
})
export class AppModule {}
