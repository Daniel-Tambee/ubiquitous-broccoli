import { Milestone, UserType } from '@prisma/client';

export class FindDto {
  id: string;
  type: UserType;
  property: keyof Milestone;
}
