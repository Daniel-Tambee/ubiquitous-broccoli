import { FarmerProfile, Cooperative } from '@prisma/client';

export interface ICooperative {
  CreateCooperative(): Promise<Cooperative>;
  FindByid(): Promise<Cooperative>;
  FindByworkerProfileId(): Promise<Cooperative>;
  UpdateProperty(): Promise<Cooperative>;
  Getfarmers(): Promise<FarmerProfile[]>;
  Addfarmer(): Promise<FarmerProfile[]>;
  Removefarmer(): Promise<FarmerProfile[]>;
}
