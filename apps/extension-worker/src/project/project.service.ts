import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '@app/lib/db/db.service';
import { ProfileService } from '../profile/profile.service';
import { IProject } from './project.interface';
import {
  FarmerProfile,
  Milestone,
  Project,
  ProjectStatus,
  ProjectType,
} from '@prisma/client';
import { CreateProjectDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { calculateGrowth } from '@app/lib/projects_growth_calc';
import { CreateMilestoneDto } from '../milestone/dto/dto';

@Injectable()
export class ProjectService implements IProject {
  /**
   *
   */
  constructor(
    private readonly db: DbService,
    private readonly profile: ProfileService,
  ) { }
  async CreateProject(data: CreateProjectDto): Promise<Project> {
    try {
      //
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
              id: data['property']['farmer_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
        include: {
          participants: true,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addmilestones(data: CreateMilestoneDto[]): Promise<any> {
    try {
      const responses = await Promise.all(
        data.map(async (milestone) => {
          return await this.db.milestone.create({
            data: {
              end_date: milestone.end_date,
              start_date: milestone.start_date,
              isAchieved: false,
              text: milestone.text,
              projectId: milestone.projectId,
            },
            include: {
              Project: {
                include: {
                  participants: true,
                  milestones: true,
                },
              },
            },
          });
        }),
      );
      // Assuming all milestones belong to the same project, we can return the Project of the first milestone
      return responses[0].Project;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(undefined, error);
    }
  }
  async Getparticipants(data: FindDto): Promise<FarmerProfile[]> {
    try {
      const user = await this.db.farmerProfile.findMany({
        where: {
          projectIds: data['property']['project_id'],
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
              id: data['property']['farmer_id'],
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
              id: data['property']['milestone_id'],
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
      const query = await this.db.project.findUnique({
        where: {
          id: data['id'],
        },
      });
      console.log(query);

      return query;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(undefined, error);
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
        data['property']['type'] !== undefined
          ? await this.db.project.update({
            data: {
              type: data['property']['type'],
            },
            where: {
              id: data['id'],
              type: data['type'],
            },
          })
          : data['property']['start_date'] !== undefined
            ? await this.db.project.update({
              data: {
                start_date: data['property']['start_date'],
              },
              where: {
                id: data['id'],
                type: data['type'],
              },
            })
            : data['property']['end_date'] !== undefined
              ? await this.db.project.update({
                data: {
                  end_date: data['property']['end_date'],
                },
                where: {
                  id: data['id'],
                  type: data['type'],
                },
              })
              : data['property']['workerProfileId'] !== undefined
                ? await this.db.project.update({
                  data: {
                    workerProfileId: data['property']['workerProfileId'],
                  },
                  where: {
                    id: data['id'],
                  },
                })
                : data['property']['isActive'] !== undefined
                  ? await this.db.project.update({
                    data: {
                      status: data['property']['isActive'],
                    },
                    where: {
                      id: data['id'],
                    },
                  })
                  : new BadRequestException('pass in a valid property');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getAllProjectCount() {
    try {
      const res: {} = {
        count: Number,
        percent: Number,
      };
      res['count'] = await this.db.project.count();
      res['percent'] = await calculateGrowth();

      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getAllProjects() {
    try {
      return await this.db.project.findMany({
        include: {
          milestones: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async toggleProjectStatus(projectId: string, status: ProjectStatus) {
    try {
      return await this.db.project.update({
        data: {
          status: status,
        },
        where: {
          id: projectId,
        },
      });
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
}
