import { ApiProperty } from '@nestjs/swagger';
import { Project } from '@prisma/client';

export class FindDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  property: keyof Project;
}
