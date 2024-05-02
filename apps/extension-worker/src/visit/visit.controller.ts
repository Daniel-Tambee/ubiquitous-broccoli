import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IVisit } from './ivisit.interface';
import { $Enums, Challenge, Prisma, Visit } from '@prisma/client';
import { CreateVisit } from './dto/dto';
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
  CreateVisit(@Body() data: CreateVisit): Promise<Visit> {
    return this.service.CreateVisit(data);
  }
  @Post('Addphoto')
  Addphoto(@Body() data: { data: Buffer; visitId: string }): Promise<Visit> {
    return this.service.Addphoto(data);
  }
  @Post('Addmilestone')
  Addmilestone(@Body() data: UpdateDto): Promise<Visit> {
    return this.service.Addmilestone(data);
  }
  @Post('Addchallenge')
  Addchallenge(@Body() data: UpdateDto): Promise<Visit> {
    return this.service.Addchallenge(data);
  }
  @Post('Removephoto')
  Removephoto(@Body() data: any): Promise<Visit> {
    return this.service.Removephoto(data);
  }
  @Post('Removemilestone')
  Removemilestone(@Body() data: UpdateDto): Promise<Visit> {
    return this.service.Removemilestone(data);
  }
  @Post('Removechallenge')
  Removechallenge(@Body() data: UpdateDto): Promise<Visit> {
    return this.service.Removechallenge(data);
  }
  @Post('Getphotos')
  Getphotos(@Body() data: FindDto): Promise<
    {
      id: string;
      data: Buffer;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }[]
  > {
    return this.service.Getphotos(data);
  }
  @Post('Getmilestones')
  Getmilestones(@Body() data: FindDto): Promise<
    {
      id: string;
      farmerProfile: string[];
      text: string;
      start_date: Date;
      end_date: Date;
      isAchieved: boolean;
      custom_field: Prisma.JsonValue;
      recommendationId: string;
      createdAt: Date;
      updatedAt: Date;
      projectId: string;
      visitId: string;
    }[]
  > {
    return this.service.Getmilestones(data);
  }
  @Post('Getchallenges')
  Getchallenges(@Body() data: FindDto): Promise<Challenge[]> {
    return this.service.Getchallenges(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: FindDto): Promise<Visit> {
    return this.service.FindByid(data);
  }
  @Post('FindBystatus')
  FindBystatus(@Body() data: FindDto): Promise<Visit[]> {
    return this.service.FindBystatus(data);
  }
  @Post('FindBymilestoneId')
  FindBymilestoneId(@Body() data: FindDto): Promise<Visit> {
    return this.service.FindBymilestoneId(data);
  }
  @Post('FindByappointmentId')
  FindByappointmentId(@Body() data: FindDto): Promise<Visit> {
    return this.service.FindByappointmentId(data);
  }
  @Post('FindByprojectId')
  FindByprojectId(@Body() data: FindDto): Promise<Visit> {
    return this.service.FindByprojectId(data);
  }
  @Post('UpdateProperties')
  UpdateProperties(
    @Body() data: UpdateDto,
  ): Promise<Visit | BadRequestException> {
    return this.service.UpdateProperties(data);
  }
}
