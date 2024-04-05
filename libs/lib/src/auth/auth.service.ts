import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { IAuth } from './auth.interface';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { ValidationDto } from './dto/login-auth.dto';
import { verify, hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuth {
  /**
   *
   */
  constructor(
    private readonly farmer: FarmerService,
    private readonly admin: AdminService,
    private readonly extensionWorker: WorkerService,
    private readonly jwtService: JwtService,
  ) {}

  // TODO pass things into create resource function
  // TODO Hash password
  async Signup(info: CreateUserDto) {
    try {
      info['password'] = await hash(info['password'] as string, {
        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        type: 2,
      });

      let query =
        info['type'] == 'FARMER'
          ? this.farmer.CreateResource(info)
          : info['type'] == 'ADMIN'
          ? this.admin.CreateResource(info)
          : info['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.CreateResource(info)
          : new Error('Please Specify User Type');
      return query;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  // TODO validate user
  async SignIn(data: ValidationDto) {
    try {
      let user =
        data['type'] == 'FARMER'
          ? await this.farmer.findByEmail(data)
          : data['type'] == 'ADMIN'
          ? await this.admin.findByEmail(data)
          : data['type'] == 'EXTENSION_WORKER'
          ? await this.extensionWorker.findByEmail(data)
          : new Error('Cant Find Any Users By that email');
      console.log(user);

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        },
      );

      const access_token =
        verification == true
          ? {
              access_token: this.jwtService.sign(data, {
                secret: process.env.HASH_SECRET || 'hash',
              }),
            }
          : new UnauthorizedException();
      return access_token;
    } catch (error) {
      console.log(error);
    }
  }
  // TODO find a way to invalidate token
  async SignOut(data: Map<string, any>) {
    throw new Error('Method not implemented.');
  }

  // TODO actually pass stuff into find by email thing
  async validate(data: ValidationDto) {
    try {
      let user =
        data['type'] == 'FARMER'
          ? this.farmer.findByEmail(data)
          : data['type'] == 'ADMIN'
          ? this.admin.findByEmail(data)
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.findByEmail(data)
          : new Error('Cant Find Any Users By that email');

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        },
      );

      if (user && verification) {
        const { ...result } = user;
        return result;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      return error;
    }
  }
  // TODO add them to db
  async ForgotPassword(data: ValidationDto, update: string) {
    try {
      let hashed = await hash(update, {
        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        type: 2,
      });

      data['password'] = hashed;
      let user =
        data['type'] == 'FARMER'
          ? this.farmer.UpdatePassword(data, update)
          : data['type'] == 'ADMIN'
          ? this.admin.UpdatePassword(data, update)
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.UpdatePassword(data, update)
          : new Error('Cant Find Any Users By that email');
      return user;
    } catch (error) {
      return error;
    }
  }
}
