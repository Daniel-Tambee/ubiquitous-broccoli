import { Project } from '.prisma/client';

// TODO define these
type excluded = 'id' | 'createdAt' | 'updatedAt';
export type CreateProjectDto = Omit<Project, excluded>;
