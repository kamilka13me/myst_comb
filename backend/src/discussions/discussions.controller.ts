import { Controller, Post, Body, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { DiscussionsService } from "./discussions.service";
import { CreateDiscussionDto } from "./dto/create-discussion.dto";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { FilesInterceptor } from "@nestjs/platform-express";

@ApiTags("discussions")
@Controller("discussions")
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Post()
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FilesInterceptor("documents", 10))
  create(
    @Body() createDiscussionDto: CreateDiscussionDto,
    @UploadedFiles() documents: Express.Multer.File[]
  ) {
    return this.discussionsService.create(createDiscussionDto, documents);
  }
}
