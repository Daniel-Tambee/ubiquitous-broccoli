import { IsEmail, IsEnum, IsString } from '@nestjs/class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class ValidationDto {
  id: string;

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
