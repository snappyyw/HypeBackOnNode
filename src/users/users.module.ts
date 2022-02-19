import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.model';
import { Favourites } from '../favourites/favourites.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Favourites])],
  exports: [UsersService],
})
export class UsersModule {}
