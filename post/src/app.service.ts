import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private userService: ClientKafka) {}
  getHello(): string {
    return 'Hello World!';
  }
}
