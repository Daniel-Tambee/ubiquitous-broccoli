import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICooperative } from './cooperative.interface';
import { $Enums, Cooperative, FarmerProfile, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

@Controller('cooperative')
@ApiTags('cooperative')
export class CooperativeController implements ICooperative {
  /**
   *
   */
  // TODO implement this
  constructor(private readonly service: undefined) {}
  @Post('CreateCooperative')
  CreateCooperative(@Body() data: CreateCooperativeDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error();
  }
  @Post('FindByid')
  FindByid(@Body() data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error();
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(@Body() data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error();
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error();
  }
  @Post('Getfarmers')
  Getfarmers(@Body() data: FindDto): Promise<
    {
      id: string;
      age: number;
      sex: $Enums.Gender;
      address: Prisma.JsonValue;
      birthday: Date;
      income: $Enums.IncomeRange;
      religion: $Enums.Religion;
      maritalStatus: $Enums.Marital;
      about: string;
      photo: Buffer;
      cooperativeId: string;
      milestoneId: string[];
      createdAt: Date;
      updatedAt: Date;
      projectId: string;
      localGovernmentId: string;
    }[]
  > {
    throw new Error();
  }
  @Post('Addfarmer')
  Addfarmer(@Body() data: UpdateDto): Promise<
    {
      id: string;
      age: number;
      sex: $Enums.Gender;
      address: Prisma.JsonValue;
      birthday: Date;
      income: $Enums.IncomeRange;
      religion: $Enums.Religion;
      maritalStatus: $Enums.Marital;
      about: string;
      photo: Buffer;
      cooperativeId: string;
      milestoneId: string[];
      createdAt: Date;
      updatedAt: Date;
      projectId: string;
      localGovernmentId: string;
    }[]
  > {
    throw new Error();
  }
  @Post('Removefarmer')
  Removefarmer(@Body() data: any): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error();
  }
}
