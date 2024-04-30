import { Challenge, Milestone, Photo, Visit } from '@prisma/client';
import { CreateVisit } from './dto/dto';
import { UpdateDto } from './dto/update_dto';
import { FindDto } from './dto/find_dto';
import { BadRequestException } from '@nestjs/common';

type excluded = 'id' | 'createdAt' | 'updatedAt';
type photo = Omit<Photo, excluded>;

export interface IVisit {
  CreateVisit(data: CreateVisit): Promise<Visit>;
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
