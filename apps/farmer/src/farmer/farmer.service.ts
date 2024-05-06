import { BadRequestException, Injectable } from '@nestjs/common';
import { User, WorkerProfile } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { FindDto } from './dto/find.dto';
import { UpdateDto } from './dto/dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';

type union = WorkerProfile | User;
type excluded = 'id' | 'createdAt' | 'updatedAt';
export type CreateFarmerDto = Partial<Omit<union, excluded>>;

@Injectable()
export class FarmerService {
  /**
   *
   */
  constructor(private readonly db: DbService) {}

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
                    photo: Buffer.from(data['property']['photo']),
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
          type: 'FARMER',
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
          type: 'FARMER',
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
          id: data['id'],
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
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: '',
          phone_number: data['phone_number'],
          type: 'FARMER',
          Farmer: {
            create: {
              address: data['address'] !== undefined ? data['address'] : {},
              photo: Buffer.from(data['photo']),
              age: Number(data['age']),
              birthday: data['birthday'],
              income: 'SMALL',
              maritalStatus: data['maritalStatus'],
              religion: data['religion'],
              sex: data['sex'],
              lga: {
                create: {
                  name: data['lga'],
                },
              },
              household: {
                create: {
                  size: Number(data['house_hold_size']),
                  number: Number(data['house_hold_number']),
                },
              },
            },
          },
        },
        include: {
          Farmer: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(undefined, error);
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
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
