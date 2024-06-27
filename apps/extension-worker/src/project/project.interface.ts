import { FarmerProfile, Milestone, Project } from '@prisma/client';
import { CreateProjectDto } from './dto/dto';
import { UpdateDto } from './dto/update_dto';
import { FindDto } from './dto/find_dto';
import { BadRequestException } from '@nestjs/common';
import { CreateMilestoneDto } from '../milestone/dto/dto';

export interface IProject {
  CreateProject(data: CreateProjectDto): Promise<Project>;
  Addparticipant(data: UpdateDto): Promise<Project>;
  Addmilestones(data: CreateMilestoneDto[]): Promise<Project>;
  Getparticipants(data: FindDto): Promise<FarmerProfile[]>;
  Removeparticipants(data: UpdateDto): Promise<Project>;
  Getmilestones(data: FindDto): Promise<Milestone[]>;
  Removemilestones(data: UpdateDto): Promise<Project>;
  FindByid(data: FindDto): Promise<Project>;
  FindBytype(data: FindDto): Promise<Project>;
  FindByparticipants(data: FindDto): Promise<Project>;
  FindBymilestones(data: FindDto): Promise<Project>;
  FindBystart_date(data: FindDto): Promise<Project>;
  FindByend_date(data: FindDto): Promise<Project>;
  FindByworkerProfileId(data: FindDto): Promise<Project>;
  UpdateProperty(data: UpdateDto): Promise<Project | BadRequestException>;
}
