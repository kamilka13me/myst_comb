import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserController } from "./user/user.controller";
import { PortfolioModule } from "./portfolio/portfolio.module";
import { CoursesModule } from "./courses/courses.module";
import { PrismaService } from "./prisma/prisma.service";
import { DiscussionsModule } from './discussions/discussions.module';
import { SupportModule } from './support/support.module';

@Module({
  imports: [PortfolioModule, CoursesModule, DiscussionsModule, SupportModule],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
