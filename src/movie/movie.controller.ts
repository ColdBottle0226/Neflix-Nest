import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

/**
 *  컨트롤러(Controller)
 *  - HTTP 요청을 받아 적절한 서비스 메서드를 호출하고, 그 결과를 클라이언트에게 반환하는 역할을 담당
 *  - HTTP 요청 처리 로직만 담당하며, 실제 비즈니스 로직은 서비스(Service)에서 처리 
 */
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  /**
   *  영화 목록 조회
   * 
   * - @Query: 쿼리 파라미터를 가져오는 데 사용되는 데코레이터
   * - title?: string: title은 선택적이며 문자열 타입임을 나타냄
     (즉, 클라이언트가 title 쿼리를 제공하지 않아도 됨)
   * @param title 
   * @returns 
   */
  @Get()
  getMovies(@Query('title') title?: string) {
    /// title 쿼리의 타입이 String 타입인지 검증

    // 로직은 서비스(프로바이더)에서 정리
    return this.movieService.getManyMovies(title);
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    return this.movieService.getMovieById(+id);
  }

  @Post()
  postMovie(@Body() body: CreateMovieDto) {
    return this.movieService.createMovie(body);
  }

  @Patch(':id')
  patchMovie(
    @Param('id') id: string,
    @Body() body: UpdateMovieDto
  ) {
    return this.movieService.updateMovie(+id, body);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(+id);
  }
}
