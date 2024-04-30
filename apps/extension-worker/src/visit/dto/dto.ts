import { Visit } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';
export type CreateVisit = Omit<Visit, excluded>;
