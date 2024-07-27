import { BadRequestException, Injectable } from '@nestjs/common';
import { ICooperative } from './cooperative.interface';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { DbService } from '@app/lib/db/db.service';
import { generateShortId } from '@app/lib/short_id';
import { CooperativeBreakdown } from './projectBreakdown';
import { calculateGrowth } from '@app/lib/cooperative_growth_calc';
import { CooperativeManager } from './CooperativeManager';
import { Cooperative, FarmerProfile, LocalGovernment } from '@prisma/client';

@Injectable()
export class CooperativeService implements ICooperative, CooperativeManager {
  /**
   *
   */
  constructor(private readonly db: DbService) { }
  async CreateCooperative(data: CreateCooperativeDto): Promise<Cooperative> {
    try {
      let query = await this.db.cooperative.create({
        data: {
          // workerProfileId: data['workerProfileId'],
          localGovernmentId: data['localGovernmentId'],
          animal_type: data['animal_type'],
          location: data['location'],
          name: data['name'],
          custom_fields: data['custom_field'],
          certificate: data['certificate']
        },
        include: {
          farmers: true,
          lga: true
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByid(data: FindDto): Promise<Cooperative> {
    try {
      let query = await this.db.cooperative.findFirstOrThrow({
        where: {
          id: data['properties']['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByworkerProfileId(data: FindDto): Promise<Cooperative> {
    try {
      let query = await this.db.cooperative.findFirstOrThrow({
        where: {
          id: data['properties']['workerProfileId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateProperty(
    data: UpdateDto,
  ): Promise<Cooperative | BadRequestException> {
    try {
      let query =
        data['properties']['localGovernmentId'] !== undefined
          ? await this.db.cooperative.update({
            where: {
              id: data['properties']['id'],
            },
            data: {
              localGovernmentId: data['properties']['localGovernmentId'],
            },
          })
          : data['properties']['workerProfileId'] !== undefined
            ? await this.db.cooperative.update({
              where: {
                id: data['properties']['id'],
              },
              data: {
                localGovernmentId: data['properties']['workerProfileId'],
              },
            })
            : new BadRequestException('pass in a valid prop');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Getfarmers(data: FindDto): Promise<FarmerProfile[]> {
    try {
      let query = await this.db.farmerProfile.findMany({
        where: {
          cooperativeId: data['properties']['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addfarmer(data: UpdateDto): Promise<FarmerProfile[]> {
    try {
      let query = await this.db.cooperative.update({
        where: {
          id: data['properties']['id'],
        },
        data: {
          farmers: {
            connect: {
              id: data['properties']['farmerProfileId'],
            },
          },
        },
      });

      let farmers = await this.db.farmerProfile.findMany({
        where: {
          cooperativeId: query['id'],
        },
      });
      return farmers;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Removefarmer(data: any): Promise<Cooperative> {
    try {
      let cooperative = await this.db.cooperative.findFirstOrThrow({
        where: {
          id: data['properties']['workerProfileId'],
        },
      });
      let query = await this.db.cooperative.update({
        where: {
          id: cooperative['id'],
        },
        data: {
          farmers: {
            disconnect: {
              id: data['properties']['farmerProfileId'],
            },
          },
        },
      });
      return cooperative;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getAllCooperatives() {
    try {
      await generateShortId()
      return this.db.cooperative.findMany({
        include: {
          lga: true,
          WorkerProfile: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getCooperativeBreakdown(): Promise<CooperativeBreakdown[]> {
    const breakdown: CooperativeBreakdown[] = [];

    const lgas: LocalGovernment[] = await this.db.localGovernment.findMany();

    for (const lga of lgas) {
      const cooperatives = await this.db.cooperative.findMany({
        where: {
          localGovernmentId: lga.id,
        },
      });

      const breakDownItem: any = {
        lga: lga,
        Count: cooperatives.length,
        Details: cooperatives,
      };

      breakdown.push(breakDownItem);
    }

    return breakdown;
  }
  async getAllCooperativeCount() {
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

  async addProject(cooperativeId: string, projectId: string): Promise<Cooperative> {
    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: {
        projects: {
          connect: { id: projectId }
        }
      },
      include: { projects: true }
    });
  }

  async removeProject(cooperativeId: string, projectId: string): Promise<Cooperative> {
    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: {
        projects: {
          disconnect: { id: projectId }
        }
      },
      include: { projects: true }
    });
  }

  async addVisit(cooperativeId: string, visit: string): Promise<Cooperative> {
    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: {
        visits: {
          push: visit
        }
      },
      // include: { visits: true }
    });
  }

  async removeVisit(cooperativeId: string, visit: string): Promise<Cooperative> {
    const cooperative = await this.db.cooperative.findUnique({
      where: { id: cooperativeId },
    });

    const updatedVisits = cooperative.visits.filter(v => v !== visit);

    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: { visits: updatedVisits },
      // include: { visits: true }
    });
  }

  async addMilestone(cooperativeId: string, milestone: string): Promise<Cooperative> {
    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: {
        milestones: {
          push: milestone
        }
      },
      // include: { milestones: true }
    });
  }

  async removeMilestone(cooperativeId: string, milestone: string): Promise<Cooperative> {
    const cooperative = await this.db.cooperative.findUnique({
      where: { id: cooperativeId },
    });

    const updatedMilestones = cooperative.milestones.filter(m => m !== milestone);

    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: { milestones: updatedMilestones },
      // include: { milestones: true }
    });
  }

  async addIntervention(cooperativeId: string, intervention: string): Promise<Cooperative> {
    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: {
        interventions: {
          push: intervention
        }
      },
      // include: { interventions: true }
    });
  }

  async removeIntervention(cooperativeId: string, intervention: string): Promise<Cooperative> {
    const cooperative = await this.db.cooperative.findUnique({
      where: { id: cooperativeId },
    });

    const updatedInterventions = cooperative.interventions.filter(i => i !== intervention);

    return await this.db.cooperative.update({
      where: { id: cooperativeId },
      data: { interventions: updatedInterventions },
      // include: { interventions: true }
    });
  }

}


