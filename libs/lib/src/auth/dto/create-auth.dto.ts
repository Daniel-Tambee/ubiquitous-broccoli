import { UserType } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  password: string;
  @IsString()
  @ApiProperty()
  first_name: string;
  @IsString()
  @ApiProperty()
  last_name: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsPhoneNumber('NG')
  @ApiProperty()
  phone_number: string;
  @IsEnum(UserType)
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
}
