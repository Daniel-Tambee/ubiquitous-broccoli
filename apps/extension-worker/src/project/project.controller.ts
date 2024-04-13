import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IProfile } from '../profile/profile.interface';
import { IProject } from './project.interface';
import { $Enums, Project } from '@prisma/client';

@Controller('project')
@ApiTags('project')
export class ProjectController implements IProject {
  @Post('CreateProject')
  CreateProject(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Addparticipants')
  Addparticipants(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Addmilestones')
  Addmilestones(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Getparticipants')
  Getparticipants(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Removeparticipants')
  Removeparticipants(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Getmilestones')
  Getmilestones(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('Removemilestones')
  Removemilestones(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByid')
  FindByid(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindBytype')
  FindBytype(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByparticipants')
  FindByparticipants(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindBymilestones')
  FindBymilestones(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindBystart_date')
  FindBystart_date(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByend_date')
  FindByend_date(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByworkerProfileId')
  FindByworkerProfileId(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('UpdateProperty')
  UpdateProperty(): Promise<Project> {
    throw new Error('Method not implemented.');
  }
}
