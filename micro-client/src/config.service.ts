import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      // port: process.env.USER_SERVICE_PORT,
    };

    this.envConfig.postService = {
      options: {
        client: {
          clientId: 'post-client',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'post-consumer',
        },
      },
      transport: Transport.KAFKA,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
