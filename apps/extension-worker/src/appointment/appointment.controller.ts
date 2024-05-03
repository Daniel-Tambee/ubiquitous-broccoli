import { BadRequestException, Controller, Post } from '@nestjs/common';
import { IAppointment } from './appointment.interface';
import { $Enums, Appointment, Visit } from '@prisma/client';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { ApiTags } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
@ApiTags('appointment')
export class AppointmentController implements IAppointment {
  /**
   *
   */
  constructor(private readonly service: AppointmentService) {}
  @Post('ScheduleAppointment')
  ScheduleAppointment(
    data: Partial<Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<Appointment> {
    return this.service.ScheduleAppointment(data);
  }
  @Post('GetVisits')
  GetVisits(data: FindDto): Promise<Visit[]> {
    return this.service.GetVisits(data);
  }
  @Post('AddVisit')
  AddVisit(data: UpdateDto): Promise<Appointment> {
    return this.service.AddVisit(data);
  }
  @Post('RemoveVisit')
  RemoveVisit(data: UpdateDto): Promise<Appointment> {
    return this.service.RemoveVisit(data);
  }
  @Post('findByid')
  findByid(data: FindDto): Promise<Appointment> {
    return this.service.findByid(data);
  }
  @Post('')
  findByTime(data: FindDto): Promise<Appointment> {
    return this.service.findByTime(data);
  }
  @Post('findByTime')
  findByStatus(data: FindDto): Promise<Appointment> {
    return this.service.findByStatus(data);
  }
  @Post('findByworkerProfileId')
  findByworkerProfileId(data: FindDto): Promise<Appointment> {
    return this.service.findByworkerProfileId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(data: UpdateDto): Promise<Appointment | BadRequestException> {
    return this.service.UpdateProperty(data);
  }
}
