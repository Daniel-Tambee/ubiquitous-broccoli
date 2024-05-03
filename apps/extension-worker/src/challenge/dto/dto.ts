import { Challenge } from '@prisma/client';

type excluded = 'createdAt' | 'updatedAt' | 'id';
export type CreateChallengeDto = Partial<Omit<Challenge, excluded>>;
