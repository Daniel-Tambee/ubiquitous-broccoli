import { Visit } from '@prisma/client';

export interface IVisit {
  CreateVisit(data): Promise<Visit>;
  Addphotos(data): Promise<Visit>;
  Addmilestone(data): Promise<Visit>;
  Addchallenge(data): Promise<Visit>;
  Removephotos(data): Promise<Visit>;
  Removemilestone(data): Promise<Visit>;
  Removechallenge(data): Promise<Visit>;
  Getphotos(data): Promise<Visit>;
  Getmilestone(data): Promise<Visit>;
  Getchallenge(data): Promise<Visit>;
  FindByid(data): Promise<Visit>;
  FindBystatus(data): Promise<Visit>;
  FindBymilestoneId(data): Promise<Visit>;
  FindByappointmentId(data): Promise<Visit>;
  FindByprojectId(data): Promise<Visit>;
  UpdateProperties(data): Promise<Visit>;
}
