// import {
//   IsOptional,
//   IsString,
//   IsEmail,
//   IsBoolean,
//   IsArray,
// } from "class-validator";

// export class CreatePortfolioDto {
//   @IsString()
//   firstName: string;

//   @IsString()
//   lastName: string;

//   @IsOptional()
//   @IsString()
//   organization?: string;

//   @IsEmail()
//   email: string;

//   @IsOptional()
//   @IsString()
//   phone?: string;

//   @IsOptional()
//   @IsString()
//   profession?: string;

//   @IsOptional()
//   @IsString()
//   expert?: string;

//   @IsBoolean()
//   agreeToTelegram: boolean;

//   @IsBoolean()
//   agreeToViber: boolean;

//   @IsBoolean()
//   agreeToProcess: boolean;

//   @IsOptional()
//   @IsArray() // Вказуємо, що це масив
//   @IsString({ each: true }) // Валідуємо кожен елемент як рядок
//   selectedBrick?: string[]; // Змінено на просто масив рядків
// }
