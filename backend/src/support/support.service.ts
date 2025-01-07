import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSupportDto } from "./dto/create-support.dto";

@Injectable()
export class SupportService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSupportDto: CreateSupportDto) {
    return this.prisma.support.create({
      data: {
        firstName: createSupportDto.firstName,
        lastName: createSupportDto.lastName,
        organization: createSupportDto.organization,
        email: createSupportDto.email,
        phone: createSupportDto.phone,
        profession: createSupportDto.profession,
        expert: createSupportDto.expert,
        agreeToTelegram: createSupportDto.agreeToTelegram,
        agreeToViber: createSupportDto.agreeToViber,
        agreeToProcess: createSupportDto.agreeToProcess,
        selectedBrick: createSupportDto.selectedBrick,
        selectedSupport: createSupportDto.selectedSupport,
        services: createSupportDto.services,
      },
    });
  }
}
