import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

import { AddFavouritesDto } from './dto/favourites.dto';
import { Favourites } from './favourites.model';
import { raw } from 'express';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectModel(Favourites) private favouritesRepository: typeof Favourites,
    private jwtService: JwtService,
  ) {}

  async addFavourites(dto: AddFavouritesDto) {
    const token = dto.token.split(' ')[1];
    const user = this.jwtService.verify(token);

    await this.favouritesRepository.create({
      answer: dto.answer,
      formula: dto.formula,
      text: dto.text,
      userId: user.id,
    });

    return await this.favouritesRepository.findAll({
      where: { userId: user.id },
    });
  }

  async getAllFavourites(auth: string) {
    const token = auth.split(' ')[1];
    const user = this.jwtService.verify(token);

    return await this.favouritesRepository.findAll({
      where: { userId: user.id },
    });
  }
}
