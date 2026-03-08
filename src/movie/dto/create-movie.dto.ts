import { IsNotEmpty } from "class-validator";

/**
 * 영화 생성 DTO (Data Transfer Object)
 */
export class CreateMovieDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    genre: string;
}
