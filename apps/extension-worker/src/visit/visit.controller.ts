import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IVisit } from './ivisit.interface';
import { $Enums, Challenge, Milestone, Prisma, Visit } from '@prisma/client';
import { CreateVisitDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { VisitService } from './visit.service';

@Controller('visit')
@ApiTags('Visit')
export class VisitController implements IVisit {
  /**
   *
   */
  constructor(private readonly service: VisitService) {}
  @Post('CreateVisit')
  CreateVisit(@Body() data: CreateVisitDto): Promise<Visit> {
    return this.service.CreateVisit(data);
  }
  @Post('Addphoto')
  Addphoto(
    @Body(new ValidationPipe()) data: { data: string; visitId: string },
  ): Promise<Visit> {
    return this.service.Addphoto(data);
  }
  @Post('Addmilestone')
  Addmilestone(@Body(new ValidationPipe()) data: UpdateDto): Promise<Visit> {
    return this.service.Addmilestone(data);
  }
  @Post('Addchallenge')
  Addchallenge(@Body(new ValidationPipe()) data: UpdateDto): Promise<Visit> {
    return this.service.Addchallenge(data);
  }
  @Post('Removephoto')
  Removephoto(@Body(new ValidationPipe()) data: any): Promise<Visit> {
    return this.service.Removephoto(data);
  }
  @Post('Removemilestone')
  Removemilestone(@Body(new ValidationPipe()) data: UpdateDto): Promise<Visit> {
    return this.service.Removemilestone(data);
  }
  @Post('Removechallenge')
  Removechallenge(@Body(new ValidationPipe()) data: UpdateDto): Promise<Visit> {
    return this.service.Removechallenge(data);
  }
  @Post('Getphotos')
  Getphotos(@Body(new ValidationPipe()) data: FindDto): Promise<
    {
      id: string;
      data: string;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }[]
  > {
    return this.service.Getphotos(data);
  }
  @Post('Getmilestones')
  Getmilestones(@Body(new ValidationPipe()) data: FindDto): Promise<
    Milestone[]
  > {
    return this.service.Getmilestones(data);
  }
  @Post('Getchallenges')
  Getchallenges(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Challenge[]> {
    return this.service.Getchallenges(data);
  }
  @Post('FindByid')
  FindByid(@Body(new ValidationPipe()) data: FindDto): Promise<Visit> {
    return this.service.FindByid(data);
  }
  @Post('FindBystatus')
  FindBystatus(@Body(new ValidationPipe()) data: FindDto): Promise<Visit[]> {
    return this.service.FindBystatus(data);
  }
  @Post('FindBymilestoneId')
  FindBymilestoneId(@Body(new ValidationPipe()) data: FindDto): Promise<Visit> {
    return this.service.FindBymilestoneId(data);
  }
  @Post('FindByappointmentId')
  FindByappointmentId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Visit> {
    return this.service.FindByappointmentId(data);
  }
  @Post('FindByprojectId')
  FindByprojectId(@Body(new ValidationPipe()) data: FindDto): Promise<Visit> {
    return this.service.FindByprojectId(data);
  }
  @Post('UpdateProperties')
  UpdateProperties(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Visit | BadRequestException> {
    return this.service.UpdateProperties(data);
  }
  @Get('getAllVisits')
  async getAllVisits(@Query('projectId') projectId: string) {
    return this.service.getAllVisits(projectId);
  }

  @Get('getAllKnownVisits')
  async getAllKnownVisits() {
    return this.service.getAllKnownVisits();
  }
}
