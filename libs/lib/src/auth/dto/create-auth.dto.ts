import { ApiProperty } from '@nestjs/swagger';
import { Gender, Marital, Religion } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'National Identification Number' })
  @IsString()
  @IsNotEmpty()
  nin: string;

  @ApiProperty({ description: 'Email address of the user' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ description: 'Last name of the user' })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ description: 'Phone number of the user' })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({ description: 'Address of the user', required: false })
  @IsOptional()
  address?: any;

  @ApiProperty({ description: 'Age of the user' })
  @IsNumber()
  @IsNotEmpty()
  age: number;


  @ApiProperty({ enum: Marital })
  @IsNotEmpty()
  maritalStatus: Marital;

  @ApiProperty({ enum: Religion })
  @IsNotEmpty()
  religion: Religion;

  @ApiProperty({ enum: Gender })
  @IsNotEmpty()
  sex: Gender;


  @ApiProperty({ description: 'localGovernmentId' })
  @IsString()
  @IsNotEmpty()
  localGovernmentId: string;

}