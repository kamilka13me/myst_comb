import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, IsBoolean, IsArray } from "class-validator";

export class CreateCourseDto {
  @ApiProperty({ example: "John" }) // Додайте приклад
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

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  agreeToTelegram?: boolean;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  agreeToViber?: boolean;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  agreeToProcess?: boolean;

  @ApiProperty({ example: ["brick1", "brick2"] })
  @IsArray()
  selectedBrick: (string | undefined)[];

  @ApiProperty({ example: "Service description" })
  @IsString()
  services: string;

  @ApiProperty({ example: "Detailed description" })
  @IsString()
  description: string;
}
