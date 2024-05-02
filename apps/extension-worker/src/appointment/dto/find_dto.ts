import { ApiProperty } from '@nestjs/swagger';
import { Appointment, Intervention } from '@prisma/client';

export class FindDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  properties: Partial<Appointment>;
}
