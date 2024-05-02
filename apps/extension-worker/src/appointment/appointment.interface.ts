import { CreateAppointmentDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

export interface Appointment {
  ScheduleAppointment(data: CreateAppointmentDto): Promise<Appointment>;
  GetVisits(data: FindDto): Promise<Appointment>;
  AddVisit(data: UpdateDto): Promise<Appointment>;
  RemoveVisit(data: UpdateDto): Promise<Appointment>;
  findByid(data: FindDto): Promise<Appointment>;
  findBytime(data: FindDto): Promise<Appointment>;
  findBystatus(data: FindDto): Promise<Appointment>;
  findByworkerProfileId(data: FindDto): Promise<Appointment>;
  UpdateProperty(data: UpdateDto): Promise<Appointment>;
}
