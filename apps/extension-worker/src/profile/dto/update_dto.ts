import { ApiProperty } from '@nestjs/swagger';
import { UserType, WorkerProfile } from '@prisma/client';

export class UpdateDto {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  @ApiProperty()
  new_value: Partial<WorkerProfile>;
}
