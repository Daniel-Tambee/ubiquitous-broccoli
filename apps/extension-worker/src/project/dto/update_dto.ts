import { Project, ProjectType } from '@prisma/client';

export class UpdateDto {
  id: string;
  type: ProjectType;
  property: keyof Project;
}
