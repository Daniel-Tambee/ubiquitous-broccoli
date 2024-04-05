import { Injectable } from '@nestjs/common';
import { IFarmer } from './ifarmer.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { $Enums, User } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';

@Injectable()
export class FarmerService implements IFarmer {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async UpdatePassword(
    data: ValidationDto,
    update: string,
  ): Promise<{
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    profileId: string;
    type: $Enums.UserType;
    createdAt: Date;
    updatedAt: Date;
  }> {
    try {
      const user = await this.db.user.update({
        where: {
          email: data['email'],
          type: 'FARMER',
        },
        data: {
          password: update,
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async CreateResource(data: CreateUserDto): Promise<{
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    profileId: string;
    type: $Enums.UserType;
    createdAt: Date;
    updatedAt: Date;
  }> {
    try {
      const user = await this.db.user.create({
        data: {
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: data['password'],
          phone_number: data['phone_number'],
          type: 'FARMER',
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  SignOut() {
    throw new Error('Method not implemented.');
  }
  async findByEmail(data: ValidationDto): Promise<User> {
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
