import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICooperative } from './cooperative.interface';
import { $Enums, Cooperative, FarmerProfile, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { CooperativeService } from './cooperative.service';
import { AuthGuard } from '@app/lib/auth/auth.guard';

@Controller('cooperative')
@UseGuards(AuthGuard)
@ApiTags('cooperative')
export class CooperativeController implements ICooperative {
  /**
   *
   */
  constructor(private readonly service: CooperativeService) { }
  @Post('CreateCooperative')
  CreateCooperative(
    @Body(new ValidationPipe()) data: CreateCooperativeDto,
  ): Promise<Cooperative> {
    return this.service.CreateCooperative(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: FindDto): Promise<Cooperative> {
    console.log(data);
    return this.service.FindByid(data);
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Cooperative> {
    return this.service.FindByworkerProfileId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Cooperative | BadRequestException> {
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
  Removefarmer(@Body(new ValidationPipe()) data: any): Promise<Cooperative> {
    return this.service.Removefarmer(data);
  }

  @Get('getAllCooperatives')
  async getAllCooperatives() {
    return this.service.getAllCooperatives();
  }

  @Get('getAllCooperativeCount')
  async getAllCooperativeCount() {
    return this.service.getAllCooperativeCount();
  }

  @Get('getCooperativeBreakdown')
  async getCooperativeBreakdown() {
    return this.service.getCooperativeBreakdown();
  }

}
