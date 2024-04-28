import { FarmerProfile, Cooperative } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

export interface ICooperative {
  CreateCooperative(data: CreateCooperativeDto): Promise<Cooperative>;
  FindByid(data: FindDto): Promise<Cooperative>;
  FindByworkerProfileId(data: FindDto): Promise<Cooperative>;
  UpdateProperty(data: UpdateDto): Promise<Cooperative>;
  Getfarmers(data: FindDto): Promise<FarmerProfile[]>;
  Addfarmer(data: UpdateDto): Promise<FarmerProfile[]>;
  Removefarmer(data): Promise<Cooperative>;
}
