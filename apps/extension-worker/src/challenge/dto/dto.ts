import { Challenge } from '@prisma/client';

type keys = 'createdAt' | 'updatedAt' | 'id';
type fields = Omit<Challenge, keys>;
export type CreateChallengeDto = Partial<fields>;
