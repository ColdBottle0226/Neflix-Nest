import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

/**
 * 영화 업데이트 DTO (Data Transfer Object)
 * 
 * - PartialType: CreateMovieDto의 모든 속성을 선택적으로 만듦
 *   (즉, 업데이트 시 모든 필드를 제공할 필요가 없음)
 */
export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    @IsNotEmpty()
    @IsOptional()
    title?: string;

    @IsNotEmpty()
    @IsOptional() // title과 genre 둘 중 하나만 입력해도 됨
    genre?: string;
}
