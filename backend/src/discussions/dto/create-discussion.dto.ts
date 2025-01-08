import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, IsBoolean, IsArray } from "class-validator";

export class CreateDiscussionDto {
  @ApiProperty({ example: "John" })
  @IsString()
  firstName: string;

  @ApiProperty({ example: "Doe" })
  @IsString()
  lastName: string;

  @ApiProperty({ example: "Company Inc." })
  @IsString()
  organization: string;

  @ApiProperty({ example: "john.doe@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "1234567890" })
  @IsString()
  phone: string;

  @ApiProperty({ example: "Developer" })
  @IsString()
  profession: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  agreeToTelegram?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  agreeToViber?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  agreeToProcess?: boolean;

  @ApiProperty({ example: ["brick1", "brick2"] })
  @IsArray()
  selectedBrick: (string | undefined)[];

  @ApiProperty({ example: "Discussion description" })
  @IsString()
  description: string;

  @ApiPropertyOptional({ type: "string", format: "binary", isArray: true })
  @IsOptional()
  documents?: Express.Multer.File[];
}
