import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User, UserType } from '@prisma/client';

export class UpdateDto {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  // @ApiPropertyOptional({
  //   description: 'property for change',
  // })
  // property: string;
  @ApiProperty({
    description: 'new value for the property',
  })
  new_value: keyof User;
}
