import { ApiProperty } from '@nestjs/swagger';
import { User, UserType } from '@prisma/client';

export class FindDto {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  @ApiProperty()
  property: keyof User;
}
