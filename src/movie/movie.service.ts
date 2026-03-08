import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

export interface Movie {
  id: number;
  title: string;
  genre: string;
}

@Injectable()
export class MovieService {
  private movies: Movie[] = [
      {
        id: 1,
        title: '해리포터',
        genre: '판타지',
      },
      {
        id: 2,
        title: '반지의 제왕',
        genre: '판타지',
      },
    ];
  
    private idCounter = 3;

    /**
     * 전체 영화 목록 조회
     * @param title 
     * @returns 
     */
    getManyMovies(title?: string) {
    if (title) {
      return this.movies.filter((m) => m.title.startsWith(title));
    }
    return this.movies;
    }

    /**
     * 특정 영화 조회
     * @param id 
     * @returns 
     */
    getMovieById(id: number) {
      const movie = this.movies.find((m) => m.id === id);
      if (!movie) {
        throw new NotFoundException('존배하지 않는 ID의 영화입니다.');
      }
      return movie;
    }

    /**
     * 영화 추가
     * @param title 
     * @returns 
     */
    createMovie(createMovieDto: CreateMovieDto) {
      const newMovie: Movie = {
        id: this.idCounter++,
        ...createMovieDto
      };

      this.movies.push(newMovie);
      return newMovie;
    }

    /**
     * 영화 수정
     * @param id 
     * @param title 
     * @returns 
     */
    updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
      const movie = this.movies.find((m) => m.id === id);
      if (!movie) {
        throw new NotFoundException('존재하지 않는 ID의 영화입니다.');
      }
      Object.assign(movie, updateMovieDto);
      return movie;
    }

    /**
     * 영화 삭재
     * @param id 
     * @returns 
     */
    deleteMovie(id: number) {
      const movieIndex = this.movies.findIndex((m) => m.id === id);
      if (movieIndex === -1) {
        throw new NotFoundException('존재하지 않는 ID의 영화입니다.');
      }
      const deletedMovie = this.movies.splice(movieIndex, 1);
      return deletedMovie[0];
    } 
}
