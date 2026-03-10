import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { Contains, Equals, IsAlphanumeric, IsBoolean, IsDateString, IsDefined, IsDivisibleBy, IsEmpty, IsEnum, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';


enum MovieGenre {
    ACTION = 'action',
    COMEDY = 'comedy',
    DRAMA = 'drama',
    HORROR = 'horror',
    ROMANCE = 'romance',
    SF = 'sf',
    THRILLER = 'thriller',
}

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

    // @IsDefined().   : null || undefined 에러 던짐
    // @IsOptional().  : null || undefined 통과
    // @Equals('code test').  : 'code test'만 입력 가능
    // @IsEmpty(). : null || undefined || '' 이면 통과
    // @IsNotEmpty() : // null || undefined || '' 에러 던짐
    // @IsIn(['action', 'comedy']) // action || comedy 만 입력 가능

    // 타입 검증
    // @IsBoolean()
    // @IsString()
    // @IsNumber()
    // @IsInt()
    // @IsEnum(MovieGenre) // 자동

    // 날짜 검증
    // @IsDateString()

    // 숫자 검증
    // @IsDivisibleBy(5) // 5로 나누어 떨어지는 수만 입력 가능
    // @IsPositive() // 0보다 큰 수만 입력 가능
    // @IsNegative() // 0보다 작은 수만 입력 가능
    // @Min(100)
    // @Max(1000)

    // 문자 검증
    // @Contains('code comedy')
    @IsAlphanumeric() // 공백 포함 불가 (ex : code test -> 에러, codeTest -> 통과)
    test: string;


}
