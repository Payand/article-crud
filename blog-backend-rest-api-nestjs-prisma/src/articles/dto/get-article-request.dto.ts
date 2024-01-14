import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class GetArticleRequestDto {
  @ApiProperty({
    description: 'article title',
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  title: string;
}
