import { forwardRef, Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesController } from './favourites.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Favourites } from './favourites.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [FavouritesService],
  controllers: [FavouritesController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Favourites]),
  ],
})
export class FavouritesModule {}
