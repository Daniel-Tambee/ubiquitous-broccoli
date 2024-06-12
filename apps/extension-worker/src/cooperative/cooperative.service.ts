import { BadRequestException, Injectable } from '@nestjs/common';
import { ICooperative } from './cooperative.interface';
import { $Enums, FarmerProfile, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { DbService } from '@app/lib/db/db.service';

@Injectable()
export class CooperativeService implements ICooperative {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateCooperative(data: CreateCooperativeDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    try {
      let lga = await this.db.localGovernment.create({
        data: {
          name: data['name'],
        },
      });
      let query = await this.db.cooperative.create({
        data: {
          workerProfileId: data['workerProfileId'],
          localGovernmentId: lga['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByid(data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
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
  async FindByworkerProfileId(data: FindDto): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
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
  async UpdateProperty(data: UpdateDto): Promise<
    | {
        id: string;
        localGovernmentId: string;
        createdAt: Date;
        updatedAt: Date;
        workerProfileId: string;
      }
    | BadRequestException
  > {
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
  async Removefarmer(data: any): Promise<{
    id: string;
    localGovernmentId: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
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
      return this.db.cooperative.findMany({});
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
