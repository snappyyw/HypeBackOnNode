import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AddFavouritesDto } from './dto/favourites.dto';
import { FavouritesService } from './favourites.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Favourites')
@Controller('favourites')
export class FavouritesController {
  constructor(private favouritesService: FavouritesService) {}

  @ApiOperation({ summary: 'Added favourites' })
  @ApiResponse({ status: 200, type: [AddFavouritesDto] })
  @UseGuards(JwtAuthGuard)
  @Post('addedFavourites')
  addFavourites(@Body() dto: AddFavouritesDto, @Headers() header) {
    return this.favouritesService.addFavourites({
      ...dto,
      token: header.authorization,
    });
  }

  @ApiOperation({ summary: 'Get all favourites' })
  @ApiResponse({ status: 200, type: [AddFavouritesDto] })
  @UseGuards(JwtAuthGuard)
  @Get('getAllFavourites')
  getAllFavourites(@Headers() header) {
    return this.favouritesService.getAllFavourites(header.authorization);
  }
}
