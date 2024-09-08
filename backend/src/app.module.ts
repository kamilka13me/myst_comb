import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [PortfolioModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
