import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { IAuth } from './auth.interface';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { ValidationDto } from './dto/login-auth.dto';
import { verify } from 'argon2';
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
  Signup(info: CreateUserDto) {
    try {
      let hash;
      let query =
        info['type'] == 'FARMER'
          ? this.farmer.CreateResource()
          : info['type'] == 'ADMIN'
          ? this.admin.CreateResource()
          : info['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.CreateResource()
          : new Error('Please Specify User Type');
      return query;
    } catch (error) {
      return error;
    }
  }
  // TODO validate user
  async SignIn(data: ValidationDto) {
    try {
      let user =
        data['type'] == 'FARMER'
          ? this.farmer.findByEmail()
          : data['type'] == 'ADMIN'
          ? this.admin.findByEmail()
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.findByEmail()
          : new Error('Cant Find Any Users By that email');

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET),
        },
      );

      const access_token =
        verification == true
          ? {
              access_token: this.jwtService.sign(data, {
                secret: process.env.HASH_SECRET,
              }),
            }
          : new UnauthorizedException();
      return access_token;
    } catch (error) {}
  }
  // TODO find a way to invalidate token
  async SignOut(data: Map<string, any>) {
    throw new Error('Method not implemented.');
  }
  async validate(data: ValidationDto) {
    try {
      let user =
        data['type'] == 'FARMER'
          ? this.farmer.findByEmail()
          : data['type'] == 'ADMIN'
          ? this.admin.findByEmail()
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.findByEmail()
          : new Error('Cant Find Any Users By that email');

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET),
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
  // TODO hash string
  async ForgotPassword(data: ValidationDto, update: String) {
    try {
      let hash;
      let user =
        data['type'] == 'FARMER'
          ? this.farmer.UpdatePassword()
          : data['type'] == 'ADMIN'
          ? this.admin.UpdatePassword()
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.UpdatePassword()
          : new Error('Cant Find Any Users By that email');
    } catch (error) {
      return error;
    }
  }
}
