import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LocalGovernment, User, WorkerProfile } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { FindDto } from './dto/find.dto';
import { CreateFarmerDto, UpdateDto } from './dto/dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Farmer } from './farmer.module';
import { calculateGrowth } from '@app/lib/farmer_growth_calc';
import { generateShortId } from '@app/lib/short_id';
import { farmerBreakdown } from './farmerBreakdown';

/* type union = WorkerProfile | User;
type excluded = 'id' | 'createdAt' | 'updatedAt';
export type CreateFarmerDto = Partial<Omit<union, excluded>>;
 */
@Injectable()
export class FarmerService {
  /**
   *
   */
  constructor(private readonly db: DbService) { }

  async UpdateProperties(data: UpdateDto): Promise<any> {
    try {
      let query =
        data['property']['first_name'] !== undefined
          ? await this.db.user.update({
            data: {
              first_name: data['property']['first_name'],
            },
            where: {
              id: data['id'],
              type: 'FARMER',
            },
          })
          : data['property']['last_name'] !== undefined
            ? await this.db.user.update({
              data: {
                last_name: data['property']['last_name'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
            : data['property']['phone_number'] !== undefined
              ? await this.db.user.update({
                data: {
                  phone_number: data['property']['phone_number'],
                },
                where: {
                  id: data['id'],
                  type: 'FARMER',
                },
              })
              : data['property']['email'] !== undefined
                ? await this.db.user.update({
                  data: {
                    email: data['property']['email'],
                  },
                  where: {
                    id: data['id'],
                    type: 'FARMER',
                  },
                })
                : data['property']['age'] !== undefined
                  ? await this.db.user.update({
                    data: {
                      Farmer: {
                        update: {
                          age: data['property']['age'],
                        },
                      },
                    },
                    where: {
                      id: data['id'],
                      type: 'FARMER',
                    },
                  })
                  : data['property']['birthday'] !== undefined
                    ? await this.db.user.update({
                      data: {
                        Farmer: {
                          update: {
                            birthday: data['property']['birthday'],
                          },
                        },
                      },
                      where: {
                        id: data['id'],
                        type: 'FARMER',
                      },
                    })
                    : data['property']['maritalStatus'] !== undefined
                      ? await this.db.user.update({
                        data: {
                          Farmer: {
                            update: {
                              maritalStatus: data['property']['maritalStatus'],
                            },
                          },
                        },
                        where: {
                          id: data['id'],
                          type: 'FARMER',
                        },
                      })
                      : data['property']['religion'] !== undefined
                        ? await this.db.user.update({
                          data: {
                            Farmer: {
                              update: {
                                religion: data['property']['religion'],
                              },
                            },
                          },
                          where: {
                            id: data['id'],
                            type: 'FARMER',
                          },
                        })
                        : data['property']['photo'] !== undefined
                          ? await this.db.user.update({
                            data: {
                              Farmer: {
                                update: {
                                  photo: data['property']['photo'],
                                },
                              },
                            },
                            where: {
                              id: data['id'],
                              type: 'FARMER',
                            },
                          })
                          : data['property']['lga'] !== undefined
                            ? await this.db.user.update({
                              data: {
                                Farmer: {
                                  update: {
                                    lga: {
                                      update: {
                                        name: data['property']['lga'],
                                      },
                                    },
                                  },
                                },
                              },
                              where: {
                                id: data['id'],
                                type: 'FARMER',
                              },
                              include: {
                                Farmer: {
                                  include: {
                                    lga: true,
                                    household: true,
                                  },
                                },
                              },
                            })
                            : new BadRequestException('pass in a valid property  please');
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async UpdateFirstName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          first_name: data['property']['first_name'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateLastName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          last_name: data['property']['last_name'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdatePhoneNumber(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          phone_number: data['property']['phone_number'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindById(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        include: {
          Farmer: {
            include: {
              lga: true,
              Cooperative: true,
              household: true,
              Intervention: true,
              Project: true,
              Milestone: true,
            },
          },
        },
      });
      return user;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error);
    }
  }
  async FindByPhone_Number(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
          phone_number: data['property'],
        },
        include: {
          Farmer: true,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByFirst_name(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
          first_name: data['property'],
        },
        include: {
          Farmer: true,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdatePassword(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          email: data['property']['email'],
          type: 'FARMER',
        },
        data: {
          password: data['property']['password'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async CreateResource(data: CreateFarmerDto): Promise<User> {
    try {
      console.log(data);

      const user = await this.db.user.create({
        data: {
          id: generateShortId(),
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: '',
          phone_number: data['phone_number'],
          type: 'FARMER',
          Farmer: {
            create: {
              id: generateShortId(),
              address: data['address'] !== undefined ? data['address'] : JSON,
              nextOfKin: data['nextOfKin'],
              farmSize: data['farmSize'],
              photo: data['photo'],
              age: Number(data['age']),
              birthday: data['birthday'],
              income: 'SMALL',
              maritalStatus: data['maritalStatus'],
              religion: data['religion'],
              sex: data['sex'],
              createdBy: data['createdBy'],
              localGovernmentId: data['lga'],
              bioData: data['bioData'],
              cooperativeId: data['cooperativeId'],
              household: {
                create: {
                  size: Number(data['household_size']),
                  number: Number(data['household_number']),
                },
              },
            },
          },
        },
        include: {
          Farmer: {
            include: {
              lga: true,
              household: true,
              Project: true,
            },
          },
        },
      });
      return user;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  SignOut() {
    throw new Error('Method not implemented.');
  }
  async FindByEmail(data: Partial<ValidationDto>): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          email: data['email'],
          type: 'FARMER',
        },
        include: {
          Farmer: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllFarmers(page = 1, pageSize = 10): Promise<any[]> {
    try {
      const query = await this.db.user.findMany({
        where: {
          type: 'FARMER',
        },
      });

      const resultPromises = query.map(async (farmer: any) => {
        farmer.workerProfileId = undefined;
        if (!farmer.farmerProfile) {
          farmer.farmerProfile = undefined;
        } else {
          const farmerId: string = farmer.farmerProfile;
          farmer.farmerProfile = await this.db.farmerProfile.findFirst({
            where: { id: farmerId },
            include: {
              // Provide the required 'where' argument
            },
          });
        }
        return farmer;
      });

      const result = await Promise.all(resultPromises);
      console.log('result  result', result);
      return result;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, {
        description: error,
      });
    }
  }

  async getAllProjects(data: FindDto) {
    try {
      // Fetch projects where all participants have the specified user ID
      const projects = await this.db.project.findMany({});
      let results = [];
      projects.forEach((project) => {
        project['participantsId'].forEach((farmer) => {
          if (farmer == data['id']) {
            results.push(project);
          }
        });
      });
      return projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new BadRequestException('Failed to fetch projects', {
        description: error.message,
      });
    }
  }

  async getAllFarmersCount() {
    try {
      const res: {} = {
        count: Number,
        percent: Number,
      };
      res['count'] = await this.db.farmerProfile.count();
      res['percent'] = await calculateGrowth();

      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findByLocalGovernmentId(id: string) {
    try {
      const res = await this.db.farmerProfile.findFirstOrThrow({
        where: {
          localGovernmentId: id,
        },
      });

      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getFarmerMilestones(FarmerProfileid: string) {
    try {
      const res = await this.db.milestone.findMany({
        where: {
          farmerProfile: {
            has: FarmerProfileid,
          },
        },
      });

      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  cronThing() {
    console.log('dont sleep');
  }

  async getFarmerBreakdown(): Promise<farmerBreakdown[]> {
    const breakdown: farmerBreakdown[] = [];

    const lgas: LocalGovernment[] = await this.db.localGovernment.findMany();

    for (const lga of lgas) {
      const farmers = await this.db.farmerProfile.findMany({
        where: {
          localGovernmentId: lga.id,
        },
        include: {
          User: true,
        },
      });

      const farmerDetails = farmers.map(farmer => ({
        ...farmer,
        user: farmer.User || null,
      }));

      const breakDownItem: any = {
        lga: lga,
        Count: farmers.length,
        Details: farmerDetails as any,
      };

      breakdown.push(breakDownItem);
    }

    return breakdown;
  }
  async getFarmersByWorkerId(workerProfileId: string) {
    try {
      const farmers = await this.db.farmerProfile.findMany({
        where: {
          lga: {
            worker: {
              some: {
                id: workerProfileId,  // Find the workers associated with the LocalGovernment
              },
            },
          },
        },
      });

      return farmers;
    } catch (error) {
      console.error('Error fetching farmers by worker profile ID:', error);
      throw error;
    }
  }
}


