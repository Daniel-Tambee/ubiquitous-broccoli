import { LocalGovernment, Project } from '@prisma/client';


export type projectBreakdown = {
  lga: LocalGovernment;
  projectCount: number;
  projectDetails: Project[];
};
