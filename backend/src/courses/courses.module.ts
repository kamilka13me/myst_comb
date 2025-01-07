import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { PrismaService } from "../prisma/prisma.service"; // Імпорт PrismaService

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService], // Додайте PrismaService до провайдерів
  exports: [PrismaService],
})
export class CoursesModule {}
