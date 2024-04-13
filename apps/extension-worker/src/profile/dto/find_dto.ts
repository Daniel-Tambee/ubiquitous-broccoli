import { ApiProperty } from '@nestjs/swagger';
import { UserType, WorkerProfile } from '@prisma/client';

export class FindDto {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  @ApiProperty()
  property: keyof WorkerProfile;
}
