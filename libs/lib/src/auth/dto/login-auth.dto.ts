import { IsEmail, IsEnum, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class ValidationDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsEnum(UserType)
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
}
