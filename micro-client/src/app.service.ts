import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  // @Client({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'user',
  //       brokers: ['localhost:9092'],
  //     },
  //     consumer: {
  //       groupId: 'user-consumer', // consumer same as in micro service
  //     },
  //   },
  // })
  // client: ClientKafka;
  constructor(
    @Inject('POST_SERVICE') private postService,
  ){}

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    // this.postService.subscribeToResponseOf('user-topic');
    // this.postService.subscribeToResponseOf('get-all-users-topic');
    // await this.postService.connect();
  }

  getUserById(id: number) {
    return this.postService.send('user-topic', { userid: id });
  }

  getAllUsers() {
    return this.postService.send('get-all-users-topic', { title: 'get all' });
  }
}
