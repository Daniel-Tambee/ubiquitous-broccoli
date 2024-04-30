import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { Visit } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export class UpdateDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  properties: Partial<Omit<Visit | 'challengeId', excluded>>;
}
