import { Cooperative } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export type UpdateDto = {
  id: string;
  properties: Partial<Cooperative> | 'farmerProfileId';
};
