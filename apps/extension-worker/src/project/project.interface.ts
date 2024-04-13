import { Project } from '@prisma/client';

export interface IProject {
  CreateProject(): Promise<Project>;
  Addparticipants(): Promise<Project>;
  Addmilestones(): Promise<Project>;
  Getparticipants(): Promise<Project>;
  Removeparticipants(): Promise<Project>;
  Getmilestones(): Promise<Project>;
  Removemilestones(): Promise<Project>;
  FindByid(): Promise<Project>;
  FindBytype(): Promise<Project>;
  FindByparticipants(): Promise<Project>;
  FindBymilestones(): Promise<Project>;
  FindBystart_date(): Promise<Project>;
  FindByend_date(): Promise<Project>;
  FindByworkerProfileId(): Promise<Project>;
  UpdateProperty(): Promise<Project>;
}
