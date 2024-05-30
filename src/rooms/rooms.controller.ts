import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Rooms } from './rooms.entity';
import { PaginationParam, PaginationsData } from 'src/utilities/pagination.dto';
import { Sorting, SortingParams } from 'src/utilities/sorting.dto';
import { Filtering, FilteringParams } from 'src/utilities/filtering.dto';
import { PaginatedResource } from 'src/utilities/types';

@Controller('/api/rooms')
export class RoomsController {

    constructor(private roomsService: RoomsService){}
    
    @Get("/")
    @HttpCode(HttpStatus.OK)
   async findAll(
      @PaginationParam() paginationParams: PaginationsData,
      @SortingParams(['id', 'name', 'capacity','userId']) sort?: Sorting,
      @FilteringParams(['id', 'name', 'capacity','userId']) filters?: Filtering
      
   ): Promise<PaginatedResource<Rooms>>{
      return this.roomsService.findAll(
         paginationParams,sort,filters
      )
   }

   @Post('/hydrate')
   hydrate(){
      return this.roomsService.hydrate();
   }
}
