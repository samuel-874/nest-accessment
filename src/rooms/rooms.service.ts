import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Rooms } from './rooms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { readFile } from 'fs/promises';
import { PaginationsData } from 'src/utilities/pagination.dto';
import { Sorting } from 'src/utilities/sorting.dto';
import { Filtering } from 'src/utilities/filtering.dto';
import { getOrder, getWhere } from 'src/utilities/utilities';
import { PaginatedResource } from 'src/utilities/types';

@Injectable()
export class RoomsService {

    constructor(
        @InjectRepository(Rooms)
        private roomRepository: Repository<Rooms>
    ){}

    async findAll(
        { limit, page, offset }: PaginationsData,
        sort: Sorting,
        filter: Filtering
    
    ): Promise<PaginatedResource<Rooms>>{

        const where = getWhere(filter);
        const order = getOrder(sort);

        const [rooms, count ] = await this.roomRepository.findAndCount({
            where,
            order,
            take: limit,
            skip: offset
        })
       return {
            totalItems: count,
            data: rooms,
            page,
            limit
       };
    }

    findOne(id: number): Promise<Rooms | undefined>{
        return this.roomRepository.findOne({
            where: {
                id
            }
        })
    }

    save(roomData: Rooms): Promise<Rooms>{
        return this.roomRepository.save(roomData)
    }

    saveAll(roomsData: Rooms[]): Promise<Rooms[]>{
        return this.roomRepository.save(roomsData)
    }

    async hydrate(){
        const rooms = await this.roomRepository.find();
        if(rooms.length < 1){
          let data: Rooms[] = JSON.parse(await readFile("data.json", "utf8"));
          return this.roomRepository.save(data)
        }
        return rooms;
    }

}
