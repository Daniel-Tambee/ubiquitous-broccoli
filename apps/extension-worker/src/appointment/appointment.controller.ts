import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IAppointment } from './appointment.interface';
import { $Enums, Appointment, Visit } from '@prisma/client';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { ApiTags } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/dto';

@Controller('appointment')
@ApiTags('appointment')
export class AppointmentController implements IAppointment {
  /**
   *
   */
  constructor(private readonly service: AppointmentService) {}
  @Post('ScheduleAppointment')
  ScheduleAppointment(
    @Body() data: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.service.ScheduleAppointment(data);
  }
  @Post('GetVisits')
  GetVisits(@Body() data: FindDto): Promise<Visit[]> {
    return this.service.GetVisits(data);
  }
  @Post('AddVisit')
  AddVisit(@Body() data: UpdateDto): Promise<Appointment> {
    return this.service.AddVisit(data);
  }
  @Post('RemoveVisit')
  RemoveVisit(@Body() data: UpdateDto): Promise<Appointment> {
    return this.service.RemoveVisit(data);
  }
  @Post('findByid')
  findByid(@Body() data: FindDto): Promise<Appointment> {
    return this.service.findByid(data);
  }
  @Post('')
  findByTime(@Body() data: FindDto): Promise<Appointment> {
    return this.service.findByTime(data);
  }
  @Post('findByTime')
  findByStatus(@Body() data: FindDto): Promise<Appointment> {
    return this.service.findByStatus(data);
  }
  @Post('findByworkerProfileId')
  findByworkerProfileId(@Body() data: FindDto): Promise<Appointment> {
    return this.service.findByworkerProfileId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Body() data: UpdateDto,
  ): Promise<Appointment | BadRequestException> {
    return this.service.UpdateProperty(data);
  }
}
