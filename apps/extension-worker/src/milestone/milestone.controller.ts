import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IMilestone } from './milestone.interface';
import { Milestone } from '@prisma/client';

@Controller('milestone')
@ApiTags('milestone')
export class MilestoneController implements IMilestone {
  @Post('CreateMilestone')
  CreateMilestone(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByid')
  FindByid(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByfarmerProfile')
  FindByfarmerProfile(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindBytext')
  FindBytext(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindBystart_date')
  FindBystart_date(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByend_date')
  FindByend_date(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByisAchieved')
  FindByisAchieved(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByrecommendationId')
  FindByrecommendationId(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('FindByprojectId')
  FindByprojectId(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }

  @Post('UpdateProperty')
  UpdateProperty(): Promise<Milestone> {
    throw new Error('Method not implemented.');
  }
}
