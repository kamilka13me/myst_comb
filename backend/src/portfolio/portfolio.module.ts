import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, PrismaService],
})
export class PortfolioModule {}
