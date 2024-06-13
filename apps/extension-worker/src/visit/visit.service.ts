import { BadRequestException, Injectable } from '@nestjs/common';
import { IVisit } from './ivisit.interface';
import { Challenge, Milestone, Photo, Visit } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { CreateVisitDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

@Injectable()
export class VisitService implements IVisit {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateVisit(data: CreateVisitDto): Promise<Visit> {
    try {
      let query = await this.db.visit.create({
        data: {
          name: data['name'],
          workerProfileId: data['workerProfileId'],
          appointmentId: data['milestoneId'],
          projectId: data['projectId'],
          status: 'UNCOMPLETED',
          milestoneId: data['milestoneId'],
          interventionId: data['interventionId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addphoto(
    data: Partial<{
      id: string;
      data: Buffer;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Visit> {
    try {
      let query = await this.db.visit.update({
        where: {
          id: data['visitId'],
        },
        data: {
          photos: {
            create: {
              data: Buffer.from(data['data']),
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addmilestone(data: UpdateDto): Promise<Visit> {
    try {
      let query = await this.db.visit.update({
        where: {
          id: data['id'],
        },
        data: {
          milestoneId: data['properties']['milestoneId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addchallenge(data: UpdateDto): Promise<Visit> {
    try {
      let query = await this.db.visit.update({
        where: {
          id: data['id'],
        },
        data: {
          challenge: {
            connect: {
              id: data['challengeId'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  Removephoto(data: any): Promise<Visit> {
    try {
    } catch (error) {}

    throw new Error('Method not implemented.');
  }
  async Removemilestone(data: UpdateDto): Promise<Visit> {
    try {
      let query = await this.db.visit.update({
        where: {
          id: data['id'],
        },
        data: {
          milestone: {
            disconnect: {
              id: data['properties']['milestoneId'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Removechallenge(data: UpdateDto): Promise<Visit> {
    try {
      let query = await this.db.visit.update({
        where: {
          id: data['id'],
        },
        data: {
          challenge: {
            disconnect: {
              id: data['challengeId'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Getphotos(data: FindDto): Promise<Photo[]> {
    try {
      let query = await this.db.photo.findMany({
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
      let query = await this.db.milestone.findMany({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async Getchallenges(data: FindDto): Promise<Challenge[]> {
    try {
      let query = await this.db.challenge.findMany({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByid(data: FindDto): Promise<Visit> {
    try {
      let query = await this.db.visit.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindBystatus(data: FindDto): Promise<Visit[]> {
    try {
      let query = await this.db.visit.findMany({
        where: {
          id: data['id'],
          status: data['properties']['status'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindBymilestoneId(data: FindDto): Promise<Visit> {
    try {
      let query = await this.db.visit.findFirstOrThrow({
        where: {
          milestone: {
            every: {
              id: data['properties']['milestoneId'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByappointmentId(data: FindDto): Promise<Visit> {
    try {
      let query = await this.db.visit.findFirstOrThrow({
        where: {
          appointment: {
            id: data['properties']['appointmentId'],
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByprojectId(data: FindDto): Promise<Visit> {
    try {
      let query = await this.db.visit.findFirstOrThrow({
        where: {
          Project: {
            id: data['properties']['projectId'],
          },
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateProperties(
    data: UpdateDto,
  ): Promise<Visit | BadRequestException> {
    try {
      let query =
        data['properties']['milestoneId'] !== undefined
          ? await this.db.visit.update({
              where: {
                id: data['id'],
              },
              data: {
                challenge: {
                  disconnect: {
                    id: data['challengeId'],
                  },
                },
              },
            })
          : data['properties']['appointmentId'] !== undefined
          ? await this.db.visit.update({
              where: {
                id: data['id'],
              },
              data: {
                challenge: {
                  disconnect: {
                    id: data['challengeId'],
                  },
                },
              },
            })
          : data['properties']['projectId'] !== undefined
          ? await this.db.visit.update({
              where: {
                id: data['id'],
              },
              data: {
                challenge: {
                  disconnect: {
                    id: data['challengeId'],
                  },
                },
              },
            })
          : data['properties']['workerProfileId'] !== undefined
          ? await this.db.visit.update({
              where: {
                id: data['id'],
              },
              data: {
                workerProfileId: {
                  set: data['properties']['workerProfileId'],
                },
              },
            })
          : new BadRequestException('pass in a valid prop');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getAllVisits(id: string) {
    try {
      return this.db.visit.findMany({
        where: {
          projectId: id,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getAllKnownVisits() {
    try {
      return this.db.visit.findMany({});
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
