import { Cooperative } from '@prisma/client';

export interface CooperativeManager {

  addProject(cooperativeId: string, projectId: string): Promise<Cooperative>;
  removeProject(cooperativeId: string, projectId: string): Promise<Cooperative>;

  addVisit(cooperativeId: string, visit: string): Promise<Cooperative>;
  removeVisit(cooperativeId: string, visit: string): Promise<Cooperative>;

  addMilestone(cooperativeId: string, milestone: string): Promise<Cooperative>;
  removeMilestone(cooperativeId: string, milestone: string): Promise<Cooperative>;

  addIntervention(cooperativeId: string, intervention: string): Promise<Cooperative>;
  removeIntervention(cooperativeId: string, intervention: string): Promise<Cooperative>;
}
