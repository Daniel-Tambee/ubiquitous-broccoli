export interface Appointment {
  ScheduleAppointment(data): Promise<Appointment>;
  GetVisits(data): Promise<Appointment>;
  AddVisit(data): Promise<Appointment>;
  RemoveVisit(data): Promise<Appointment>;
  findByid(data): Promise<Appointment>;
  findBytime(data): Promise<Appointment>;
  findBystatus(data): Promise<Appointment>;
  findByworkerProfileId(data): Promise<Appointment>;
  UpdateProperty(data: Promise<Appointment>);
}
