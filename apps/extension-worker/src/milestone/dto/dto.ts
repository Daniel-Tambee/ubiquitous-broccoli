import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class CreateMilestoneDto {
  @ApiPropertyOptional({ type: String, format: 'uuid' })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiProperty({ type: String, description: 'Array of FarmerProfile IDs' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  farmerProfileId: string;

  @ApiProperty({ type: String })
  @IsString()
  text: string;

  @ApiProperty({ type: Date })
  @IsDate()
  @Type(() => Date)
  start_date: Date;

  @ApiProperty({ type: Date })
  @IsDate()
  @Type(() => Date)
  end_date: Date;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  isAchieved: boolean;

  @ApiPropertyOptional({ type: Object, description: 'Custom fields as JSON object' })
  @IsOptional()
  custom_field?: Record<string, unknown>;

  @ApiPropertyOptional({ type: String, format: 'uuid' })
  @IsUUID()
  @IsOptional()
  recommendationId?: string;


  @ApiPropertyOptional({ type: String, format: 'uuid' })
  @IsUUID()
  @IsOptional()
  projectId?: string;

  @ApiPropertyOptional({ type: String, format: 'uuid' })
  @IsUUID()
  @IsOptional()
  visitId?: string;
}
