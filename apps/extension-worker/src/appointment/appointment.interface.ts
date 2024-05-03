import { Appointment, Visit } from '@prisma/client';
import { CreateAppointmentDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { BadRequestException } from '@nestjs/common';

export interface IAppointment {
  ScheduleAppointment(data: CreateAppointmentDto): Promise<Appointment>;
  GetVisits(data: FindDto): Promise<Visit[]>;
  AddVisit(data: UpdateDto): Promise<Appointment>;
  RemoveVisit(data: UpdateDto): Promise<Appointment>;
  findByid(data: FindDto): Promise<Appointment>;
  findByTime(data: FindDto): Promise<Appointment>;
  findByStatus(data: FindDto): Promise<Appointment>;
  findByworkerProfileId(data: FindDto): Promise<Appointment>;
  UpdateProperty(data: UpdateDto): Promise<Appointment | BadRequestException>;
}
