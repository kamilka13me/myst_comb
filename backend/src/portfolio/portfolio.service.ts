import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreatePortfolioDto } from "./dto/portfolio.dto";

@Injectable()
export class PortfolioService {
  constructor(private prisma: PrismaService) {}

  async createForm(createPortfolioDto: CreatePortfolioDto) {
    const {
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      expert,
      agreeToTelegram,
      agreeToViber,
      agreeToProcess,
      selectedBrick,
    } = createPortfolioDto;

    try {
      return await this.prisma.portfolio.create({
        data: {
          firstName,
          lastName,
          organization,
          email,
          phone,
          profession,
          expert,
          agreeToTelegram,
          agreeToViber,
          agreeToProcess,
          selectedBrick,
        },
      });
    } catch {
      throw new Error('Помилка при створенні запису портфоліо');
    }
  }
}
