import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'POST_SERVICE',
      useFactory: (configService: ConfigService) => {
        const postServiceOptions = configService.get('postService');
        return ClientProxyFactory.create(postServiceOptions);
      },
      inject: [ConfigService]
    },
  ],
})
export class AppModule {}
