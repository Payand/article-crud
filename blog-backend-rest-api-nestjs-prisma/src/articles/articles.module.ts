import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesRepository } from './articles.repository';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository],
  imports: [PrismaModule],
})
export class ArticlesModule {}
