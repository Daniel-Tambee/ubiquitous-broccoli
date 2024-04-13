import { Milestone } from '@prisma/client';

export interface IMilestone {
  CreateMilestone(): Promise<Milestone>;
  FindByid(): Promise<Milestone>;
  FindByfarmerProfile(): Promise<Milestone>;
  FindBytext(): Promise<Milestone>;
  FindBystart_date(): Promise<Milestone>;
  FindByend_date(): Promise<Milestone>;
  FindByisAchieved(): Promise<Milestone>;
  FindByrecommendationId(): Promise<Milestone>;
  FindByprojectId(): Promise<Milestone>;
  UpdateProperty(): Promise<Milestone>;
}
