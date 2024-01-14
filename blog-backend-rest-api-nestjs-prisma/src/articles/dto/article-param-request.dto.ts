import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class ArticleParamRequestDto {
  @ApiProperty({
    type: String,
  })
  @IsUUID()
  id: string;
}
