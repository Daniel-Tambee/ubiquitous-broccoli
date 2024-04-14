import { ApiProperty } from '@nestjs/swagger';

export class CreateMilestoneDto {
  @ApiProperty()
  Farmers: string[];
  @ApiProperty()
  text: string;
  @ApiProperty()
  start_date: string;
  @ApiProperty()
  end_date: string;
  @ApiProperty()
  recommendationId: string;
  @ApiProperty()
  projectId: string;
}
