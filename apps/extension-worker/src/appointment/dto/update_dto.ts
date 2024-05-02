import { ApiProperty } from '@nestjs/swagger';
import { Appointment, Intervention } from '@prisma/client';

export class UpdateDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  properties: Partial<Appointment>;
}
