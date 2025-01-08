import { ApiProperty } from "@nestjs/swagger";

export class CreateSupportDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  profession: string;

  @ApiProperty()
  expert: string;

  @ApiProperty({ required: false })
  agreeToTelegram?: boolean;

  @ApiProperty({ required: false })
  agreeToViber?: boolean;

  @ApiProperty({ required: false })
  agreeToProcess?: boolean;

  @ApiProperty({ type: [String] })
  selectedBrick: (string | undefined)[];

  @ApiProperty({ type: [String] })
  selectedSupport: (string | undefined)[];

  @ApiProperty()
  services: string;
}
