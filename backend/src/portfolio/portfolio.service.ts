// import { Injectable } from '@nestjs/common'
// import { PrismaService } from './prisma.service';

// @Injectable()
// export class PortfolioService {
//   constructor(private prisma: PrismaService) {}

//   async createForm(createPortfolioDto: createPortfolioDto, userId: number) {
//     const {
//       firstName,
//       lastName,
//       organization,
//       email,
//       phone,
//       profession,
//       expert,
//       agreeToTelegram,
//       agreeToViber,
//       agreeToProcess,
//       selectedBrick,
//     } = createPortfolioDto;

//     return this.prisma.portfolio.create({
//       data: {
//         firstName,
//         lastName,
//         organization,
//         email,
//         phone,
//         profession,
//         expert,
//         agreeToTelegram,
//         agreeToViber,
//         agreeToProcess,
//         selectedBrick,
//         userId, 
//       },
//     });
//   }
// }
