import {
  IsOptional,
  IsString,
  IsEmail,
  IsBoolean,
  IsArray,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePortfolioDto {
  @ApiProperty({ description: "Ім'я користувача" })
  @IsString()
  firstName: string;

  @ApiProperty({ description: "Прізвище користувача" })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({ description: "Організація користувача" })
  @IsOptional()
  @IsString()
  organization?: string;

  @ApiProperty({ description: "Електронна пошта користувача" })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ description: "Телефон користувача" })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: "Професія користувача" })
  @IsOptional()
  @IsString()
  profession?: string;

  @ApiPropertyOptional({ description: "Експертність користувача" })
  @IsOptional()
  @IsString()
  expert?: string;

  @ApiProperty({ description: "Згода на Telegram" })
  @IsBoolean()
  agreeToTelegram: boolean;

  @ApiProperty({ description: "Згода на Viber" })
  @IsBoolean()
  agreeToViber: boolean;

  @ApiProperty({ description: "Згода на обробку даних" })
  @IsBoolean()
  agreeToProcess: boolean;

  @ApiPropertyOptional({ description: "Вибрані елементи" })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  selectedBrick?: string[];
}
