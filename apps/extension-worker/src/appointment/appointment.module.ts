import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { DbService } from '@app/lib/db/db.service';

@Module({
  providers: [AppointmentService, DbService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
