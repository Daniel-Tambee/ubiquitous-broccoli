import { IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCooperativeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsOptional()
  workerProfileId?: string;

  constructor(createCooperativeDto: CreateCooperativeDto) {
    Object.assign(this, createCooperativeDto);
  }
}
