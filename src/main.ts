import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * 글로벌 파이프 설정
   * - ValidationPipe: DTO의 유효성 검사를 자동으로 수행하는 파이프
   *   (예: CreateMovieDto, UpdateMovieDto에서 정의된 규칙에 따라 입력 데이터 검증)
   * - app.useGlobalPipes(): 애플리케이션 전체에 파이프를 적용하는 메서드
   *   (즉, 모든 컨트롤러에서 DTO 검증이 자동으로 이루어짐)
   */
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
