import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender, Marital, Religion, User, UserType } from '@prisma/client';

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
  property: Partial<User>;
}

export class CreateFarmerDto {
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  @ApiProperty()
  age: number;
  @ApiProperty({
    enum: Gender,
  })
  sex: Gender;
  @ApiProperty()
  address: {};
  @ApiProperty()
  birthday: string;
  @ApiProperty({
    enum: Religion,
  })
  religion: Religion;
  @ApiProperty({
    enum: Marital,
  })
  maritalStatus: Marital;
  @ApiProperty()
  photo: Buffer;
  @ApiProperty()
  household_size: number;
  @ApiProperty()
  household_number: number;
  @ApiProperty()
  lga: string;
}
