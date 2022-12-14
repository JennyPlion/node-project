import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      // port: process.env.USER_SERVICE_PORT,
    };

    this.envConfig.userService = {
      options: {
        // client: {
        //   clientId: 'user-client',
        //   brokers: ['localhost:9092'],
        // },
        // consumer: {
        //   groupId: 'user-consumer',
        // },

        urls: ['amqp://localhost:5672'],
        queue: 'client_queue',
        queueOptions: {
          durable: false,
        },
      },
      transport: Transport.RMQ,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
