import { Injectable, BadRequestException } from '@nestjs/common';
import { IProfile } from './profile.interface';
import { $Enums, Cooperative, Prisma, Project } from '@prisma/client';
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
      throw new BadRequestException(error);
    }
  }
  async Getprojects(data: FindDto): Promise<Project[]> {
    try {
      let query = await this.db.project.findMany({
        where: {
          workerProfileId: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
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
      throw new BadRequestException(error);
    }
  }
  async GetCooperative(data: FindDto): Promise<Cooperative[]> {
    try {
      let query = await this.db.cooperative.findMany({
        where: {
          workerProfileId: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async Addproject(data: CreateProjectDto): Promise<Project> {
    try {
      let project = await this.db.project.create({
        data: {
          status: 'ACTIVE',
          end_date: data['end_date'],
          start_date: data['start_date'],
          type: data['type'],
          workerProfileId: data['id'],
        },
      });

      for (let index = 0; index < data['farmer_ids'].length; index++) {
        const element = data['farmer_ids'][index] as string;
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
      throw new BadRequestException(error);
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
  async AddCooperative(data: CreateCooperativeDto): Promise<Cooperative> {
    try {
      let cooperative = await this.db.cooperative.create({
        data: {
          localGovernmentId: data['localGovernmentId'],
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
      throw new BadRequestException(error);
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
              id: data['properties']['project_id'],
            },
          },
        },
      });
      return true;
    } catch (error) {
      throw new BadRequestException(error);
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
              id: data['properties']['project_id'],
            },
          },
        },
      });
      return true;
    } catch (error) {
      throw new BadRequestException(error);
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
      throw new BadRequestException(error);
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
        data['properties']['about'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                about: data['properties']['about'],
              },
            })
          : data['properties']['age'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                age: data['properties']['age'],
              },
            })
          : data['properties']['sex'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                sex: data['properties']['sex'],
              },
            })
          : data['properties']['birthday'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                birthday: data['properties']['birthday'],
              },
            })
          : data['properties']['address'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                address: data['properties']['address'],
              },
            })
          : data['properties']['religion'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                religion: data['properties']['religion'],
              },
            })
          : data['properties']['religion'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                religion: data['properties']['religion'],
              },
            })
          : data['properties']['maritalStatus'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                maritalStatus: data['properties']['maritalStatus'],
              },
            })
          : data['properties']['photo'] !== undefined
          ? await this.db.workerProfile.update({
              where: {
                id: data['id'],
              },
              data: {
                photo: Buffer.from(data['properties']['maritalStatus']),
              },
            })
          : new BadRequestException('specify a proper type to be updated');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
