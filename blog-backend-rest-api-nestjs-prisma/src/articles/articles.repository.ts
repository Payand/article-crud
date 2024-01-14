import { Injectable } from '@nestjs/common';
// Services
import { PrismaService } from 'src/prisma/prisma.service';
// Type
import { Prisma } from '@prisma/client';
@Injectable()
export class ArticlesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany() {
    return this.prismaService.article.findMany();
  }

  async create(data: Prisma.ArticleCreateInput) {
    return this.prismaService.article.create({
      data,
      select: {
        id: true,
        title: true,
        description: true,
        body: true,
        published: true,
      },
    });
  }

  async update(id: string, data: Prisma.ArticleUpdateInput) {
    return this.prismaService.article.update({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        body: true,
        published: true,
      },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: string) {
    return this.prismaService.article.delete({
      where: {
        id,
      },
    });
  }
}
