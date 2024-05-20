import {
  BadRequestException,
  Body,
  Controller,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IProject } from './project.interface';
import { FarmerProfile, Milestone, Project } from '@prisma/client';
import { CreateProjectDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { ProjectService } from './project.service';

@Controller('project')
@ApiTags('project')
export class ProjectController implements IProject {
  /**
   *
   */
  constructor(private readonly project: ProjectService) {}
  @Post('CreateProject')
  CreateProject(
    @Body(new ValidationPipe()) data: CreateProjectDto,
  ): Promise<Project> {
    try {
      return this.project.CreateProject(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Addparticipant')
  Addparticipant(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Project> {
    try {
      return this.project.Addparticipant(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Addmilestones')
  Addmilestones(@Body(new ValidationPipe()) data: UpdateDto): Promise<Project> {
    try {
      return this.project.Addmilestones(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Getparticipants')
  Getparticipants(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<FarmerProfile[]> {
    try {
      return this.project.Getparticipants(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Removeparticipants')
  Removeparticipants(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Project> {
    try {
      return this.project.Removeparticipants(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Getmilestones')
  Getmilestones(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Milestone[]> {
    try {
      return this.project.Getmilestones(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('Removemilestones')
  Removemilestones(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Project> {
    try {
      return this.project.Removemilestones(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindByid')
  FindByid(@Body(new ValidationPipe()) data: FindDto): Promise<Project> {
    try {
      return this.project.FindByid(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindBytype')
  FindBytype(@Body(new ValidationPipe()) data: FindDto): Promise<Project> {
    try {
      return this.project.FindBytype(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindByparticipants')
  FindByparticipants(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Project> {
    try {
      return this.project.FindByparticipants(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindBymilestones')
  FindBymilestones(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Project> {
    try {
      return this.project.FindBymilestones(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindBystart_date')
  FindBystart_date(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Project> {
    try {
      return this.project.FindBystart_date(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindByend_date')
  FindByend_date(@Body(new ValidationPipe()) data: FindDto): Promise<Project> {
    try {
      return this.project.FindByend_date(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Project> {
    try {
      return this.project.FindByworkerProfileId(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<Project | BadRequestException> {
    try {
      return this.project.UpdateProperty(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
