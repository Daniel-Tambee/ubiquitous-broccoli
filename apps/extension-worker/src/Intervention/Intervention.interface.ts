import { Intervention } from '@prisma/client';
import { CreateInterventionDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { BadRequestException } from '@nestjs/common';

export interface IIntervention {
  createIntervention(data: CreateInterventionDto): Promise<Intervention>;
  findById(data: FindDto): Promise<Intervention>;
  findByAmount(data: FindDto): Promise<Intervention>;
  findByType(data: FindDto): Promise<Intervention>;
  findByFarmerProfileId(data: FindDto): Promise<Intervention>;
  findByProjectId(data: FindDto): Promise<Intervention>;
  updateProperty(data: UpdateDto): Promise<Intervention | BadRequestException>;
}
