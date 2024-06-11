import { BadRequestException } from '@nestjs/common';
import { Challenge, Milestone, Photo, Visit } from '@prisma/client';
import { CreateVisitDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

type excluded = 'id' | 'createdAt' | 'updatedAt';
type photo = Omit<Photo, excluded>;

export interface IVisit {
  CreateVisit(data: CreateVisitDto): Promise<Visit>;
  Addphoto(data: photo): Promise<Visit>;
  Addmilestone(data: UpdateDto): Promise<Visit>;
  Addchallenge(data: UpdateDto): Promise<Visit>;
  Removephoto(data): Promise<Visit>;
  Removemilestone(data: UpdateDto): Promise<Visit>;
  Removechallenge(data: UpdateDto): Promise<Visit>;
  Getphotos(data: FindDto): Promise<Photo[]>;
  Getmilestones(data: FindDto): Promise<Milestone[]>;
  Getchallenges(data: FindDto): Promise<Challenge[]>;
  FindByid(data: FindDto): Promise<Visit>;
  FindBystatus(data: FindDto): Promise<Visit[]>;
  FindBymilestoneId(data: FindDto): Promise<Visit>;
  FindByappointmentId(data: FindDto): Promise<Visit>;
  FindByprojectId(data: FindDto): Promise<Visit>;
  UpdateProperties(data: UpdateDto): Promise<Visit | BadRequestException>;
}
