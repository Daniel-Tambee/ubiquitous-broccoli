import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { Cooperative } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export type CreateCooperativeDto = Omit<Cooperative, excluded>;
