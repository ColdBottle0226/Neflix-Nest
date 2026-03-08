import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies(@Query('title') title?: string) {
    /// title 쿼리의 타입이 String 타입인지 검증

    // 로직은 서비스(프로바이더)에서 정리
    return this.movieService.getManyMovies(title);
  }

  @Get(':id')
  getMovie(@Param('id') id: string){
    return this.movieService.getMovieById(+id);
  }

  @Post()
  postMovie(@Body('title') title: string) {
    return this.movieService.createMovie(title);
  }

  @Patch(':id')
  patchMovie(
    @Param('id') id: string, 
    @Body('title') title: string
  ) {
    return this.movieService.updateMovie(+id, title);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(+id);
  }
}
