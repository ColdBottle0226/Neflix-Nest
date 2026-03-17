import { IsNotEmpty } from "class-validator";

/**
 * 영화 생성 DTO (Data Transfer Object)
 */
export class CreateMovieDto {
    @IsNotEmpty()   // 비어있을 수 없음
    title: string;

    @IsNotEmpty()   // 비어있을 수 없음
    genre: string;
}
