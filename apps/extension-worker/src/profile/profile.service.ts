import { Injectable, BadRequestException } from '@nestjs/common';
import { IProfile } from './profile.interface';
import { $Enums, Prisma } from '@prisma/client';
import { CreateCooperativeDto } from '../cooperative/dto/dto';
import { CreateProjectDto } from '../project/dto/dto';
import { CreateReportDto } from '../report/dto/dto';
import { CreateProfileDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { DbService } from '@app/lib/db/db.service';

@Injectable()
export class ProfileService implements IProfile {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateProfile(data: CreateProfileDto): Promise<{
    id: string;
    age: number;
    sex: $Enums.Gender;
    birthday: Date;
    address: Prisma.JsonValue;
    religion: $Enums.Religion;
    maritalStatus: $Enums.Marital;
    about: string;
    photo: Buffer;
    createdAt: Date;
    updatedAt: Date;
  }> {
    try {
      let user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['userId'],
        },
      });
      let query = await this.db.workerProfile.create({
        data: {
          address: data['address'],
          age: data['age'],
          birthday: data['birthday'],
          maritalStatus: data['maritalStatus'],
          religion: data['religion'],
          sex: data['sex'],
          User: {
            connect: {
              id: user.id,
            },
          },
          about: data['about'],
          photo: Buffer.from(data['photo']),
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async Getprojects(data: FindDto): Promise<
    {
      id: string;
      type: $Enums.ProjectType;
      start_date: Date;
      end_date: Date;
      workerProfileId: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  > {
    try {
      let query = await this.db.project.findMany({
        where: {
          workerProfileId: data['id'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async Getreports(
    data: FindDto,
  ): Promise<
    { id: string; createdAt: Date; updatedAt: Date; workerProfileId: string }[]
  > {
    try {
      let query = await this.db.report.findMany({
        where: {
          workerProfileId: data['id'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async GetCooperative(
    data: FindDto,
  ): Promise<
    { id: string; createdAt: Date; updatedAt: Date; workerProfileId: string }[]
  > {
    try {
      let query = await this.db.cooperative.findMany({
        where: {
          workerProfileId: data['id'],
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async Addproject(data: CreateProjectDto): Promise<{
    id: string;
    type: $Enums.ProjectType;
    start_date: Date;
    end_date: Date;
    workerProfileId: string;
    createdAt: Date;
    updatedAt: Date;
  }> {
    try {
      let project = await this.db.project.create({
        data: {
          end_date: data['end_date'],
          start_date: data['start_date'],
          type: data['type'],
          workerProfileId: data['id'],
        },
      });

      for (let index = 0; index < data['farmer_ids'].length; index++) {
        const element = data['farmer_ids'][index];
        const pAddFarmers = await this.db.project.findFirstOrThrow({
          where: {
            id: project.id,
          },
        });
        const conn = await this.db.project.update({
          where: {
            id: pAddFarmers.id,
          },
          data: {
            participants: {
              connect: {
                id: element,
              },
            },
          },
        });
      }
      return project;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  // TODO implement this too
  async Addreport(data: CreateReportDto): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    let query = await this.db.report.create({
      data: {},
    });
    throw new Error('Method not implemented.');
  }
  async AddCooperative(data: CreateCooperativeDto): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    try {
      let cooperative = await this.db.cooperative.create({
        data: {
          workerProfileId: data['id'],
        },
      });

      for (let index = 0; index < data['farmer_ids'].length; index++) {
        const element = data['farmer_ids'][index];
        const pAddFarmers = await this.db.cooperative.findFirstOrThrow({
          where: {
            id: cooperative.id,
          },
        });
        const conn = await this.db.cooperative.update({
          where: {
            id: pAddFarmers.id,
          },
          data: {
            farmers: {
              connect: {
                id: element,
              },
            },
          },
        });
      }
      return cooperative;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async Removeproject(data: UpdateDto): Promise<boolean> {
    try {
      let query = await this.db.project.update({
        where: {
          workerProfileId: data['id'],
        },
        data: {
          participants: {
            disconnect: {
              id: data['new_value']['project_id'],
            },
          },
        },
      });
      return true;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  //TODO Implement this too
  async Removereport(data: UpdateDto): Promise<boolean> {
    let query = await this.db.report.update({
      where: {
        workerProfileId: data['id'],
      },
      data: {},
    });
    return true;
  }
  async RemoveCooperative(data: UpdateDto): Promise<boolean> {
    try {
      let query = await this.db.cooperative.update({
        where: {
          workerProfileId: data['id'],
        },
        data: {
          farmers: {
            disconnect: {
              id: data['new_value']['project_id'],
            },
          },
        },
      });
      return true;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async findByUserId(data: FindDto): Promise<{
    id: string;
    age: number;
    sex: $Enums.Gender;
    birthday: Date;
    address: Prisma.JsonValue;
    religion: $Enums.Religion;
    maritalStatus: $Enums.Marital;
    about: string;
    photo: Buffer;
    createdAt: Date;
    updatedAt: Date;
  }> {
    try {
      let query = await this.db.workerProfile.findFirstOrThrow({
        where: {
          User: {
            every: {
              id: data['property']['user_id'],
            },
          },
        },
      });
      return query;
    } catch (error) {
      new BadRequestException(error);
    }
  }
  async UpdateProperty(data: UpdateDto): Promise<
    | {
        id: string;
        age: number;
        sex: $Enums.Gender;
        birthday: Date;
        address: Prisma.JsonValue;
        religion: $Enums.Religion;
        maritalStatus: $Enums.Marital;
        about: string;
        photo: Buffer;
        createdAt: Date;
        updatedAt: Date;
      }
    | BadRequestException
  > {
    console.log(data);

    try {
      let query =
        data['new_value']['about'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                about: data['new_value']['about'],
              },
            })
          : data['new_value']['age'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                age: data['new_value']['age'],
              },
            })
          : data['new_value']['sex'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                sex: data['new_value']['sex'],
              },
            })
          : data['new_value']['birthday'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                birthday: data['new_value']['birthday'],
              },
            })
          : data['new_value']['address'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                address: data['new_value']['address'],
              },
            })
          : data['new_value']['religion'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                religion: data['new_value']['religion'],
              },
            })
          : data['new_value']['religion'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                religion: data['new_value']['religion'],
              },
            })
          : data['new_value']['maritalStatus'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                maritalStatus: data['new_value']['maritalStatus'],
              },
            })
          : data['new_value']['photo'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                photo: Buffer.from(data['new_value']['maritalStatus']),
              },
            })
          : new BadRequestException('specify a proper type to be updated');
      return query;
    } catch (error) {
      return error;
    }
  }
}
