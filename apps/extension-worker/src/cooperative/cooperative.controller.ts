import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common';
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
  CreateCooperative(
    @Body(new ValidationPipe()) data: CreateCooperativeDto,
  ): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.CreateCooperative(data);
  }
  @Post('FindByid')
  FindByid(@Body(new ValidationPipe()) data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.FindByid(data);
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(@Body(new ValidationPipe()) data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.FindByworkerProfileId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body(new ValidationPipe()) data: UpdateDto): Promise<
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
  Getfarmers(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<FarmerProfile[]> {
    return this.service.Getfarmers(data);
  }
  @Post('Addfarmer')
  Addfarmer(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<FarmerProfile[]> {
    return this.service.Addfarmer(data);
  }
  @Post('Removefarmer')
  Removefarmer(@Body(new ValidationPipe()) data: any): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.service.Removefarmer(data);
  }


  @Get('getAllCooperatives')
  async getAllCooperatives() {
    return this.service.getAllCooperatives()
  }
}
