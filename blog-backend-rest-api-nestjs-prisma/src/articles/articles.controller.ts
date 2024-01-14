import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleParamRequestDto } from './dto/article-param-request.dto';

@Controller('articles')
@ApiTags('Articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get('/get')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async findMany() {
    return this.articlesService.findMany();
  }

  @Post('/create')
  @ApiCreatedResponse({ type: ArticleEntity })
  async create(@Body() payload: CreateArticleDto) {
    return this.articlesService.create(payload);
  }

  @Put(':id/update')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async update(
    @Param() params: ArticleParamRequestDto,
    @Body() data: UpdateArticleDto,
  ) {
    return this.articlesService.update(params.id, data);
  }

  @Delete(':id/delete')
  @ApiOkResponse({ type: ArticleEntity })
  async delete(@Param() params: ArticleParamRequestDto) {
    return this.articlesService.delete(params.id);
  }
}
