import { Cooperative, Project, WorkerProfile, Report } from '@prisma/client';
import { CreateProfileDto } from './dto/dto';
import { UpdateDto } from './dto/update_dto';
import { FindDto } from './dto/find_dto';
import { CreateProjectDto } from '../project/dto/dto';
import { CreateReportDto } from '../report/dto/dto';
import { CreateCooperativeDto } from '../cooperative/dto/dto';
import { BadRequestException } from '@nestjs/common';

export interface IProfile {
  CreateProfile(data: CreateProfileDto): Promise<WorkerProfile>;
  Getprojects(data: FindDto): Promise<Project[]>;
  Getreports(data: FindDto): Promise<Report[]>;
  GetCooperative(data: FindDto): Promise<Cooperative[]>;
  Addproject(data: CreateProjectDto): Promise<Project>;
  Addreport(data: CreateReportDto): Promise<Report>;
  AddCooperative(data: CreateCooperativeDto): Promise<Cooperative>;
  Removeproject(data: UpdateDto): Promise<boolean>;
  Removereport(data: UpdateDto): Promise<boolean>;
  RemoveCooperative(data: UpdateDto): Promise<boolean>;
  findByUserId(data: FindDto): Promise<WorkerProfile>;
  UpdateProperty(data: UpdateDto): Promise<WorkerProfile | BadRequestException>;
}
