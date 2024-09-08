import { Body, Controller, Post } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { CreatePortfolioDto } from "./dto/portfolio.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("portfolio")
@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  @ApiResponse({ status: 201, description: "Portfolio created." })
  @ApiResponse({ status: 400, description: "Invalid data." })
  async createPortfolio(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfolioService.createForm(createPortfolioDto);
  }
}
