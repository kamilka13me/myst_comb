import { Body, Controller, Post } from "@nestjs/common";
import { SupportService } from "./support.service";
import { CreateSupportDto } from "./dto/create-support.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("support")
@Controller("support")
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post()
  @ApiOperation({ summary: "Create a new support request" })
  @ApiResponse({
    status: 201,
    description: "The support request has been successfully created.",
  })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async create(@Body() createSupportDto: CreateSupportDto) {
    return this.supportService.create(createSupportDto);
  }
}
