import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Get,
  Query,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  AddFavouritesDto,
  PaginationDto,
  TotalCountDto,
  DeleteDto,
} from './dto/favourites.dto';
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
  getAllFavourites(@Headers() header, @Query() dto: PaginationDto) {
    return this.favouritesService.getAllFavourites({
      header: header.authorization,
      dto,
    });
  }

  @ApiOperation({ summary: 'Delete favourites' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete('deleteFavourites')
  deleteFavourites(@Headers() header, @Query() dto: DeleteDto) {
    return this.favouritesService.deleteFavourites({
      header: header.authorization,
      dto,
    });
  }

  @ApiOperation({ summary: 'Get total count favourites' })
  @ApiResponse({ status: 200, type: TotalCountDto })
  @UseGuards(JwtAuthGuard)
  @Get('getTotalCountFavourites')
  getTotalCountFavourites(@Headers() header) {
    return this.favouritesService.getTotalCountFavourites(header.authorization);
  }
}
