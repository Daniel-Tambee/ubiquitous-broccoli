import { BadRequestException, Injectable } from '@nestjs/common';
import { ICooperative } from './cooperative.interface';
import { $Enums, Cooperative, FarmerProfile, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { DbService } from '@app/lib/db/db.service';
import { generateShortId } from '@app/lib/short_id';

@Injectable()
export class CooperativeService implements ICooperative {
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
          custom_fields:data['custom_field']
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
}
