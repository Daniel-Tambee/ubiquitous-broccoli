import {
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  isArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus, ProjectType } from '@prisma/client';

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  farmer_ids: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ enum: ProjectStatus, enumName: 'ProjectStatus' })
  @IsEnum(ProjectStatus)
  status: ProjectStatus;

  @ApiProperty({ enum: ProjectType, enumName: 'ProjectType' })
  @IsEnum(ProjectType)
  type: ProjectType;

  @ApiProperty({ type: Date })
  @IsDateString()
  start_date: Date;

  @ApiProperty({ type: Date })
  @IsDateString()
  end_date: Date;

  constructor(data: CreateProjectDto) {
    Object.assign(this, data);
  }
}
