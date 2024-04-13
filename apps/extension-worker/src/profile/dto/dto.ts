import { ApiProperty } from '@nestjs/swagger';
import { Gender, Marital, Religion } from '@prisma/client';

export class CreateProfileDto {
  @ApiProperty()
  age: number;
  @ApiProperty({
    enum: Gender,
  })
  sex: Gender;
  @ApiProperty()
  birthday: string;
  @ApiProperty()
  address: string;
  @ApiProperty({
    enum: Religion,
  })
  religion: Religion;
  @ApiProperty({
    enum: Marital,
  })
  maritalStatus: Marital;
  @ApiProperty({
    description: 'the id of the base user',
  })
  userId: string;
  @ApiProperty()
  about: string;
  @ApiProperty()
  photo: Buffer;
}
