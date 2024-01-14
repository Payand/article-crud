import { Injectable } from '@nestjs/common';

import { ArticlesRepository } from './articles.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private readonly articlesRepository: ArticlesRepository) {}
  async findMany() {
    return this.articlesRepository.findMany();
  }

  async create(payload: CreateArticleDto) {
    return await this.articlesRepository.create({
      title: payload.title,
      description: payload.description,
      body: payload.body,
      published: payload.published,
    });
  }

  async update(id: string, payload: UpdateArticleDto) {
    return await this.articlesRepository.update(id, payload);
  }

  async delete(id: string) {
    return await this.articlesRepository.delete(id);
  }
}
