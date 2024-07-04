import { ApiProperty } from '@nestjs/swagger';
import { Intervention_type } from '@prisma/client';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
  IsJSON,
  IsDateString,
} from 'class-validator';

export class CreateInterventionDto {
  @ApiProperty({ description: 'Amount of the intervention', default: 0.0 })
  @IsNumber()
  readonly amount?: number;

  @ApiProperty({ description: 'Custom field as a JSON object' })
  readonly custom_field?: object;

  @ApiProperty({
    description: 'Type of the intervention',
    enum: Intervention_type,
  })
  @IsEnum(Intervention_type)
  readonly type: Intervention_type;

  @ApiProperty({
    description: 'ID of the related FarmerProfile',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly farmerProfileId?: string;

  @ApiProperty({
    description: 'subCategory id or string',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly subCategory?: string;


  @ApiProperty({ description: 'ID of the related Project', required: false })
  @IsOptional()
  @IsString()
  readonly projectId?: string;
}
