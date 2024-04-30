import { BadRequestException, Injectable } from '@nestjs/common';
import { IChallenge } from './challenge.interface';
import { $Enums, Challenge, Prisma } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { UpdateDto } from './dto/update_dto';
import { CreateChallengeDto } from './dto/dto';

@Injectable()
export class ChallengeService implements IChallenge {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateChallenge(data: CreateChallengeDto): Promise<Challenge> {
    try {
      let query = await this.db.challenge.create({
        data: {
          type: data['type'],
          custom_fields: data['custom_fields'],
          visitId: data['visitId'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async FindByid(
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    try {
      let query = await this.db.challenge.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async FindBytype(
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    try {
      let query = await this.db.challenge.findFirstOrThrow({
        where: {
          id: data['id'],
          type: data['type'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  FindBycustom_felids(
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  async FindByvisitId(
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    try {
      let query = await this.db.challenge.findFirstOrThrow({
        where: {
          id: data['id'],
          visitId: data['visitId'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async UpdateProperty(
    data: UpdateDto,
  ): Promise<Challenge | BadRequestException> {
    try {
      let query =
        data['properties']['visitId'] !== undefined
          ? await this.db.challenge.update({
              data: {
                visitId: data['properties']['visitId'],
              },
              where: {
                id: data['id'],
              },
            })
          : data['properties']['type'] !== undefined
          ? await this.db.challenge.update({
              data: {
                visitId: data['properties']['type'],
              },
              where: {
                id: data['id'],
              },
            })
          : new BadRequestException('pass in a valid property');
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
}
