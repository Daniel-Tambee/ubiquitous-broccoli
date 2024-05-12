import { DbService } from '@app/lib/db/db.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IMilestone } from './milestone.interface';
import { CreateMilestoneDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { FarmerProfile, Milestone } from '@prisma/client';

@Injectable()
export class MilestoneService implements IMilestone {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateMilestone(data: CreateMilestoneDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.create({
        data: {
          end_date: data['end_date'],
          isAchieved: false,
          start_date: data['start_date'],
          text: data['text'],
        },
      });

      data['Farmers'].forEach(async (farmer) => {
        await this.db.milestone.update({
          where: {
            id: query['id'],
          },
          data: {
            farmerProfile: {
              push: farmer,
            },
          },
        });
      });

      return query;
    } catch (error) {}
  }
  async FindByid(data: FindDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.findUniqueOrThrow({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {}
  }
  async GetFarmers(data: FindDto): Promise<FarmerProfile[]> {
    try {
      let query = await this.db.farmerProfile.findMany({
        where: {
          Milestone: data['property']['milestone_id'],
        },
      });
      return query;
    } catch (error) {}
  }
  async AddFarmers(data: UpdateDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.update({
        data: {
          Farmer: {
            connect: {
              id: data['property']['farmer_id'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {}
  }
  async RemoveFarmers(data: UpdateDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.update({
        data: {
          Farmer: {
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
    } catch (error) {}
  }
  async FindBytext(data: FindDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.findFirstOrThrow({
        where: {
          text: data['property']['text'],
        },
      });
      return query;
    } catch (error) {}
  }
  async FindByisAchieved(data: FindDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.findFirstOrThrow({
        where: {
          isAchieved: data['property']['isAchieved'],
        },
      });
      return query;
    } catch (error) {}
  }
  async FindByrecommendationId(data: FindDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.findFirstOrThrow({
        where: {
          recommendationId: data['property']['recommendationId'],
        },
      });
      return query;
    } catch (error) {}
  }
  async FindByprojectId(data: FindDto): Promise<Milestone> {
    try {
      let query = await this.db.milestone.findFirstOrThrow({
        where: {
          recommendationId: data['property']['recommendationId'],
        },
      });
      return query;
    } catch (error) {}
  }
  async UpdateProperty(
    data: UpdateDto,
  ): Promise<Milestone | BadRequestException> {
    try {
      let query =
        data['new_value']['start_date'] !== undefined
          ? await this.db.milestone.update({
              data: {
                start_date: data['new_value']['start_date'],
              },
              where: {
                id: data['id'],
              },
            })
          : data['new_value']['end_date'] !== undefined
          ? await this.db.milestone.update({
              data: {
                end_date: data['new_value']['end_date'],
              },
              where: {
                id: data['id'],
              },
            })
          : data['new_value']['text'] !== undefined
          ? await this.db.milestone.update({
              data: {
                text: data['new_value']['text'],
              },
              where: {
                id: data['id'],
              },
            })
          : data['new_value']['isAchieved'] !== undefined
          ? await this.db.milestone.update({
              data: {
                isAchieved: data['new_value']['isAchieved'],
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
}
