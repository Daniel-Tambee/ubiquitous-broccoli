import { FarmerProfile, Milestone } from '@prisma/client';
import { CreateMilestoneDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { BadRequestException } from '@nestjs/common';

export interface IMilestone {
  CreateMilestone(data: CreateMilestoneDto): Promise<Milestone>;
  FindByid(data: FindDto): Promise<Milestone>;
  GetFarmers(data: FindDto): Promise<FarmerProfile[]>;
  AddFarmers(data: UpdateDto): Promise<Milestone>;
  RemoveFarmers(data: UpdateDto): Promise<Milestone>;
  FindBytext(data: FindDto): Promise<Milestone>;
  FindByisAchieved(data: FindDto): Promise<Milestone>;
  FindByrecommendationId(data: FindDto): Promise<Milestone>;
  FindByprojectId(data: FindDto): Promise<Milestone>;
  UpdateProperty(data: UpdateDto): Promise<Milestone | BadRequestException>;
}
