import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCooperativeDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  Cooperative_name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  animal_type?: string;

  @ApiProperty()
  localGovernmentId?: string;

  // @ApiProperty()
  // @IsOptional()
  // @IsUUID()
  // workerProfileId?: string;

  constructor(createCooperativeDto: CreateCooperativeDto) {
    Object.assign(this, createCooperativeDto);
  }
}
