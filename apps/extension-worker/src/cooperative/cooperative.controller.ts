import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICooperative } from './cooperative.interface';
import { $Enums, Cooperative, FarmerProfile, Prisma } from '@prisma/client';

@Controller('cooperative')
@ApiTags('cooperative')
export class CooperativeController implements ICooperative {
  @Post('CreateCooperative')
  CreateCooperative(): Promise<Cooperative> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByid')
  FindByid(): Promise<Cooperative> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(): Promise<Cooperative> {
    throw new Error('Method not implemented.');
  }
  @Post('UpdateProperty')
  UpdateProperty(): Promise<Cooperative> {
    throw new Error('Method not implemented.');
  }
  @Post('Getfarmers')
  Getfarmers(): Promise<FarmerProfile[]> {
    throw new Error('Method not implemented.');
  }
  @Post('Addfarmer')
  Addfarmer(): Promise<FarmerProfile[]> {
    throw new Error('Method not implemented.');
  }
  @Post('Removefarmer')
  Removefarmer(): Promise<FarmerProfile[]> {
    throw new Error('Method not implemented.');
  }
}
