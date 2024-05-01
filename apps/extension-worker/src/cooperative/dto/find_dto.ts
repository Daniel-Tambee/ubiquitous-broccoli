import { Cooperative } from '@prisma/client';

export type FindDto = {
  id: string;
  properties: Partial<Cooperative>;
};
