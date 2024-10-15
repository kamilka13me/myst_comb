import { Injectable } from "@nestjs/common";
import { CreateDiscussionDto } from "./dto/create-discussion.dto";

@Injectable()
export class DiscussionsService {
  create(createDiscussionDto: CreateDiscussionDto, documents: Express.Multer.File[]) {
    // Логіка для обробки даних та збереження файлів
    console.log("Discussion data:", createDiscussionDto);
    console.log("Uploaded files:", documents);

    // Можете зберігати дані в базі даних або робити інші операції
    return { message: "Discussion created successfully", data: createDiscussionDto };
  }
}
