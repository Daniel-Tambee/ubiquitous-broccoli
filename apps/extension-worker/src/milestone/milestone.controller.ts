import { BadRequestException, Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IMilestone } from './milestone.interface';
import { FarmerProfile, Milestone } from '@prisma/client';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { CreateMilestoneDto } from './dto/dto';
import { MilestoneService } from './milestone.service';

@Controller('milestone')
@ApiTags('milestone')
export class MilestoneController implements IMilestone {
  /**
   *
   */
  constructor(private readonly milestone: MilestoneService) {}
  @Post('CreateMilestone')
  CreateMilestone(
    @Body(new ValidationPipe()) data: CreateMilestoneDto,
  ): Promise<Milestone> {
    return this.milestone.CreateMilestone(data);
  }
  @Post('FindByid')
  FindByid(@Body(new ValidationPipe()) data: FindDto): Promise<Milestone> {
    return this.milestone.FindByid(data);
  }
  @Post('GetFarmers')
  GetFarmers(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<FarmerProfile[]> {
    return this.milestone.GetFarmers(data);
  }
  @Post('AddFarmers')
  AddFarmers(@Body(new ValidationPipe()) data: UpdateDto): Promise<Milestone> {
    return this.milestone.AddFarmers(data);
  }
  @Post('RemoveFarmers')
  RemoveFarmers(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Milestone> {
    return this.milestone.RemoveFarmers(data);
  }
  @Post('FindBytext')
  FindBytext(@Body(new ValidationPipe()) data: FindDto): Promise<Milestone> {
    return this.milestone.FindBytext(data);
  }
  @Post('FindByisAchieved')
  FindByisAchieved(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Milestone> {
    return this.milestone.FindByisAchieved(data);
  }
  @Post('FindByrecommendationId')
  FindByrecommendationId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Milestone> {
    return this.milestone.FindByrecommendationId(data);
  }
  @Post('FindByprojectId')
  FindByprojectId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Milestone> {
    return this.milestone.FindByprojectId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Milestone | BadRequestException> {
    return this.milestone.UpdateProperty(data);
  }
}
