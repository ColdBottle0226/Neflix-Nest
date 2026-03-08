import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

/**
 * Movie Module: 영화 관련 기능을 담당하는 모듈
 * 
 * - 모듈,컨트롤러,서비스 전체 생성 명령어
 * nest g resource [movie]
 *   - REST API
 *   - WebSockets
 *   - GraphQL
 * 
 */
@Module({
  controllers: [MovieController],
  providers: [MovieService], // IOC, 서비스 = 프로바이더, 모든 프로바이더 != 서비스
})
export class MovieModule {}
