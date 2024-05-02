import { DbService } from '@app/lib/db/db.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IIntervention } from './Intervention.interface';
import { Prisma, $Enums, Intervention } from '@prisma/client';
import { CreateInterventionDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';

@Injectable()
export class InterventionService implements IIntervention {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async createIntervention(data: CreateInterventionDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.create({
        data: {
          custom_field: data['custom_field'],
          type: data['type'],
          amount: data['amount'],
          farmerProfileId: data['farmerProfileId'],
          projectId: data['projectId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findById(data: FindDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });

      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByAmount(data: FindDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.findFirstOrThrow({
        where: {
          id: data['id'],
          amount: data['properties']['amount'],
        },
      });

      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByType(data: FindDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.findFirstOrThrow({
        where: {
          id: data['id'],
          type: data['properties']['type'],
        },
      });

      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByFarmerProfileId(data: FindDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.findFirstOrThrow({
        where: {
          id: data['id'],
          farmerProfileId: data['properties']['farmerProfileId'],
        },
      });

      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByProjectId(data: FindDto): Promise<Intervention> {
    try {
      let query = await this.db.intervention.findFirstOrThrow({
        where: {
          id: data['id'],
          projectId: data['properties']['projectId'],
        },
      });

      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async updateProperty(
    data: UpdateDto,
  ): Promise<Intervention | BadRequestException> {
    try {
      let query =
        data['properties']['amount'] !== undefined
          ? await this.db.intervention.update({
              where: {
                id: data['id'],
              },
              data: {
                amount: data['properties']['amount'],
              },
            })
          : data['properties']['farmerProfileId'] !== undefined
          ? await this.db.intervention.update({
              where: {
                id: data['id'],
              },
              data: {
                farmerProfileId: data['properties']['farmerProfileId'],
              },
            })
          : data['properties']['projectId'] !== undefined
          ? await this.db.intervention.update({
              where: {
                id: data['id'],
              },
              data: {
                projectId: data['properties']['projectId'],
              },
            })
          : data['properties']['type'] !== undefined
          ? await this.db.intervention.update({
              where: {
                id: data['id'],
              },
              data: {
                type: data['properties']['type'],
              },
            })
          : data['properties']['custom_field'] !== undefined
          ? await this.db.intervention.update({
              where: {
                id: data['id'],
              },
              data: {
                custom_field: data['properties']['custom_field'],
              },
            })
          : new BadRequestException('pass in a valid prop');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
