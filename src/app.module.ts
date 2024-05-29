import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { Rooms } from './rooms/rooms.entity';



const  dotenv  = require('dotenv');
const fs = require("fs");


dotenv.config();

const {
   DB_HOST: host,
   DB_PORT: port, 
   DB_USERNAME: username,
   DB_PASSWORD: password, 
   DB_DATABASE: database
  } = process.env;


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: parseInt(port),
      username: username,
      password: password,
      database: database,
      entities: [Rooms],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("ca.pem").toString(),
      },
    }),
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
