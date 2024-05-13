import { BadRequestException, Injectable } from '@nestjs/common';
import { Iworker } from './iworker.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { $Enums, User } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';

@Injectable()
export class WorkerService implements Iworker {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async UpdateFirstName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'EXTENSION_WORKER',
        },
        data: {
          first_name: data['new_value'],
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
          type: 'EXTENSION_WORKER',
        },
        data: {
          last_name: data['new_value'],
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
          type: 'EXTENSION_WORKER',
        },
        data: {
          phone_number: data['new_value'],
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
          type: 'EXTENSION_WORKER',
        },
        include: {
          workerProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByPhone_Number(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'EXTENSION_WORKER',
          phone_number: data['property'],
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
          type: 'EXTENSION_WORKER',
          first_name: data['property'],
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
          type: 'EXTENSION_WORKER',
        },
        data: {
          password: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async CreateResource(data: CreateUserDto): Promise<User> {
    try {
      const user = await this.db.user.create({
        data: {
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: '',
          phone_number: data['phone_number'],
          type: 'EXTENSION_WORKER',
          workerProfile: {
            create: {
              address: data['address'],
              age: data['age'],
              birthday: data['birthday'],
              maritalStatus: data['maritalStatus'],
              religion: data['religion'],
              sex: data['sex'],
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
  SignOut() {
    throw new Error('Method not implemented.');
  }
  async FindByEmail(data: Partial<ValidationDto>): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          email: data['email'],
          type: 'EXTENSION_WORKER',
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllWorkers() {
    let query = await this.db.workerProfile.findMany({
      where: {
        User: {
          every: {
            type: 'EXTENSION_WORKER',
          },
        },
      },
    });
    return query;
  }

  UpdateProperties = async (
    data: UpdateDto,
  ): Promise<User | BadRequestException> => {
    console.log(data);
    try {
      let query =
        data['property']['email'] !== undefined
          ? await this.db.user.update({
              data: {
                email: data['property']['email'],
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['first_name'] !== undefined
          ? await this.db.user.update({
              data: {
                first_name: data['property']['first_name'],
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['phone_number'] !== undefined
          ? await this.db.user.update({
              data: {
                phone_number: data['property']['phone_number'],
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['password'] !== undefined
          ? await this.db.user.update({
              data: {
                password: data['property']['password'],
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['birthday'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    birthday: data['property']['birthday'],
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['age'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    age: data['property']['age'],
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['religion'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    religion: data['property']['religion'],
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['maritalStatus'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    maritalStatus: data['property']['maritalStatus'],
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['sex'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    sex: data['property']['sex'],
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
            })
          : data['property']['address'] !== undefined
          ? await this.db.user.update({
              data: {
                workerProfile: {
                  update: {
                    address: JSON.parse(data['property']['address']),
                  },
                },
              },
              where: {
                id: data['id'],
                type: 'EXTENSION_WORKER',
              },
              include: {
                workerProfile: {
                  include: {
                    Appointment: true,
                    Challenge: true,
                    Cooperative: true,
                    projects: true,
                    reports: true,
                    Visit: true,
                  },
                },
              },
            })
          : new BadRequestException('Please pass in a valid property');
      return query;
    } catch (error) {
      new BadRequestException(error, {
        cause: error,
      });
    }
  };
}
