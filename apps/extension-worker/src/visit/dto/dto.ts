import { IsString, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  appointmentId: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  milestoneId: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  projectId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  workerProfileId?: string;

  @ApiProperty()
  @IsOptional()
  interventionId?: string;

  constructor(createVisitDto: CreateVisitDto) {
    Object.assign(this, createVisitDto);
  }
}
