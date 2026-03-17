import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';

/**
 * App Module: 애플리케이션의 루트 모듈
 * 
 * imports: 모듈을 가져오는 곳
 * exports: 다른 모듈에서 사용할 수 있도록 내보내는 곳
 * controllers: 라우터를 담당하는 컨트롤러를 등록하는 곳
 * providers: 서비스를 등록하는 곳, 의존성 주입이 필요한 모든 클래스는 여기에 등록해야 함 
 */
@Module({
  imports: [MovieModule],   // 또다른 모듈을 가져오고 싶을 때
  controllers: [],        // 컨트롤러를 등록하는 곳
  providers: [],          // IOC, 서비스 = 프로바이더, 모든 프로바이더 != 서비스
})
export class AppModule { }
