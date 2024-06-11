import { IsDate, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Appointment_Status } from '@prisma/client';

export class CreateAppointmentDto {
  @ApiProperty()
  @IsDate()
  time: Date;

  @ApiProperty()
  @IsUUID()
  workerProfileId: string;

  constructor(createAppointmentDto: CreateAppointmentDto) {
    Object.assign(this, createAppointmentDto);
  }
}
