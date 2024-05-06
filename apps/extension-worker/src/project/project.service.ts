import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '@app/lib/db/db.service';
import { ProfileService } from '../profile/profile.service';
import { IProject } from './project.interface';
import { FarmerProfile, Milestone, Project, ProjectType } from '@prisma/client';
import { CreateProjectDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

@Injectable()
export class ProjectService implements IProject {
  /**
   *
   */
  constructor(
    private readonly db: DbService,
    private readonly profile: ProfileService,
  ) {}
  async CreateProject(data: CreateProjectDto): Promise<Project> {
    try {
      const query = await this.profile.Addproject(data);
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addparticipant(data: UpdateDto): Promise<Project> {
    try {
      const query = await this.db.project.update({
        data: {
          participants: {
            connect: {
              id: data['new_value']['farmer_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addmilestones(data: UpdateDto): Promise<Project> {
    try {
      const query = await this.db.project.update({
        data: {
          participants: {
            connect: {
              id: data['new_value']['farmer_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Getparticipants(data: FindDto): Promise<FarmerProfile[]> {
    try {
      const user = await this.db.farmerProfile.findMany({
        where: {
          projectId: data['property']['project_id'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Removeparticipants(data: UpdateDto): Promise<Project> {
    try {
      const query = await this.db.project.update({
        data: {
          participants: {
            disconnect: {
              id: data['new_value']['farmer_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Getmilestones(data: FindDto): Promise<Milestone[]> {
    try {
      const user = await this.db.milestone.findMany({
        where: {
          projectId: data['property']['project_id'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Removemilestones(data: UpdateDto): Promise<Project> {
    try {
      const query = await this.db.project.update({
        data: {
          milestones: {
            disconnect: {
              id: data['new_value']['milestone_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByid(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindBytype(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          type: FindDto['property']['type'] as ProjectType,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByparticipants(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          participants: {
            every: {
              id: data['property']['farmer_id'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindBymilestones(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          milestones: {
            every: {
              id: data['property']['milestone_id'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindBystart_date(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          start_date: data['property']['start_date'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async FindByend_date(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          end_date: data['property']['end_date'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByworkerProfileId(data: FindDto): Promise<Project> {
    try {
      const query = await this.db.project.findFirstOrThrow({
        where: {
          id: FindDto['id'],
          workerProfileId: data['property']['workerProfileId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateProperty(
    data: UpdateDto,
  ): Promise<Project | BadRequestException> {
    try {
      const query =
        data['new_value']['type'] !== undefined
          ? await this.db.project.update({
              data: {
                type: data['new_value']['type'],
              },
              where: {
                id: data['id'],
                type: data['type'],
              },
            })
          : data['new_value']['start_date'] !== undefined
          ? await this.db.project.update({
              data: {
                start_date: data['new_value']['start_date'],
              },
              where: {
                id: data['id'],
                type: data['type'],
              },
            })
          : data['new_value']['end_date'] !== undefined
          ? await this.db.project.update({
              data: {
                end_date: data['new_value']['end_date'],
              },
              where: {
                id: data['id'],
                type: data['type'],
              },
            })
          : new BadRequestException('pass in a valid property');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
