import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
