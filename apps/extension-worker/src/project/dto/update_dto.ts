import { Project, ProjectType } from '@prisma/client';

export class UpdateDto {
  id: string;
  type: ProjectType;
  new_value: keyof Project;
}
