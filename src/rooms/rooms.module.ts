import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rooms])
  ],
  providers: [RoomsService],
  controllers: [RoomsController]
})
export class RoomsModule {}
