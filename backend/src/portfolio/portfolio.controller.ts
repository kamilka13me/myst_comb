// import { Body, Controller, Post } from "@nestjs/common";
// import { PortfolioService } from "./portfolio.service";
// import { CreatePortfolioDto } from "./dto/portfolio.dto";

// @Controller("portfolio")
// export class PortfolioController {
//   constructor(private readonly portfolioService: PortfolioService) {}

//   @Post()
//   async createPortfolio(
//     @Body() createPortfolioDto: CreatePortfolioDto,
//     @UserId() userId: number
//   ) {
//     return this.portfolioService.createForm(createPortfolioDto, userId);
//   }
// }
