import { Cooperative, LocalGovernment, Project } from '@prisma/client';


export type CooperativeBreakdown = {
  lga: LocalGovernment;
  cooperativeCount: number;
  cooperativeDetails: Cooperative[];
};
