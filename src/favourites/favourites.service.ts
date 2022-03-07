import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

import { AddFavouritesDto } from './dto/favourites.dto';
import { Favourites } from './favourites.model';

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

  async deleteFavourites(obj) {
    const token = obj.header?.split(' ')[1];
    const user = this.jwtService.verify(token);

    const data = await this.favouritesRepository.destroy({
      where: { userId: user.id, id: obj.dto.id },
    });

    if (data) {
      throw new HttpException('Запись удалена', HttpStatus.OK);
    } else {
      throw new HttpException('Запись не найдена', HttpStatus.BAD_REQUEST);
    }
  }

  async getTotalCountFavourites(auth: string) {
    const token = auth?.split(' ')[1];
    const user = this.jwtService.verify(token);

    const data = await this.favouritesRepository.findAndCountAll({
      where: { userId: user.id },
      limit: 0,
      offset: 0,
    });

    return {
      totalCount: data?.count,
    };
  }

  async getAllFavourites(obj) {
    const token = obj?.header?.split(' ')[1];
    const user = this.jwtService.verify(token);

    const data = await this.favouritesRepository.findAndCountAll({
      where: { userId: user.id },
      limit: obj.dto.count,
      offset: (obj.dto.page - 1) * obj.dto.count,
    });

    return {
      totalCount: data?.count,
      totalPage: Math.ceil(data?.count / obj.dto.count),
      array: data?.rows,
    };
  }
}
