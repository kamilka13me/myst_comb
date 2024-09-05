import { Body, Controller, Put } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user-dto/update-user-dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('user')
export class UserController {
  @Put()
  @ApiBody({ type: UpdateUserDto })
  updateUser(@Body() updateUserDto: UpdateUserDto): string {
    return `User ${updateUserDto.name} updated!`;
  }
}
