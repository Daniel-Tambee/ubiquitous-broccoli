import { FarmerProfile, LocalGovernment, Project, User } from '@prisma/client';


export type farmerBreakdown = {
  lga: LocalGovernment;
  farmerCount: number;
  farmerDetails: (FarmerProfile & {
    user: User | null;
  })[];
};