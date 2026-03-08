import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],     // 서비스 = 프로바이더, 모든 프로바이더 != 서비스
})
export class AppModule {}
