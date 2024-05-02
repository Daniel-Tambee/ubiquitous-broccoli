import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Module({
  providers: [AppointmentService]
})
export class AppointmentModule {}
