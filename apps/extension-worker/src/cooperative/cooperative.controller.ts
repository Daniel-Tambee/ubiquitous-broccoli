import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICooperative } from './cooperative.interface';
import { $Enums, FarmerProfile, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { CooperativeService } from './cooperative.service';

@Controller('cooperative')
@ApiTags('cooperative')
export class CooperativeController implements ICooperative {
  /**
   *
   */
  constructor(private readonly service: CooperativeService) {}
  @Post('CreateCooperative')
  CreateCooperative(@Body() data: CreateCooperativeDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.CreateCooperative(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.FindByid(data);
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(@Body() data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.FindByworkerProfileId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto): Promise<
    | {
        id: string;
        localGovernmentId: string;
        createdAt: Date;
        updatedAt: Date;
        workerProfileId: string;
      }
    | BadRequestException
  > {
    return this.service.UpdateProperty(data);
  }
  @Post('Getfarmers')
  Getfarmers(@Body() data: FindDto): Promise<FarmerProfile[]> {
    return this.service.Getfarmers(data);
  }
  @Post('Addfarmer')
  Addfarmer(@Body() data: UpdateDto): Promise<FarmerProfile[]> {
    return this.service.Addfarmer(data);
  }
  @Post('Removefarmer')
  Removefarmer(@Body() data: any): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.Removefarmer(data);
  }
}
