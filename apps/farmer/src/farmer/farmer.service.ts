import { BadRequestException, Injectable } from '@nestjs/common';
import { IFarmer } from './ifarmer.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
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
        data['new_value']['first_name'] !== undefined
          ? await this.db.user.update({
              data: {
                first_name: data['new_value']['first_name'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['last_name'] !== undefined
          ? await this.db.user.update({
              data: {
                last_name: data['new_value']['last_name'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['phone_number'] !== undefined
          ? await this.db.user.update({
              data: {
                phone_number: data['new_value']['phone_number'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['email'] !== undefined
          ? await this.db.user.update({
              data: {
                email: data['new_value']['email'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : new BadRequestException('pass in a valid property  please');
      return query;
    } catch (error) {
      return error;
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
          first_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
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
          last_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
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
          phone_number: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
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
      return error;
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
      return error;
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
      return error;
    }
  }
  async UpdatePassword(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          email: data['property'],
          type: 'FARMER',
        },
        data: {
          password: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async CreateResource(data: CreateFarmerDto): Promise<User> {
    try {
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
              address: {},
              photo: Buffer.from(data['photo']),
              age: data['age'],
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
            },
          },
        },
        include: {
          workerProfile: true,
        },
      });
      return user;
    } catch (error) {
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
