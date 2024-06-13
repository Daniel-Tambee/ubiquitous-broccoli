import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { IAuth } from './auth.interface';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { ValidationDto } from './dto/login-auth.dto';
import { verify, hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { DbService } from '../db/db.service';
import { generateTOTP } from '../otp_generation';
import { MailService } from '../email/email.service';

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
    private readonly db: DbService,
    private readonly mail: MailService,
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
        info['type'] == 'ADMIN'
          ? this.admin.CreateResource(info)
          : info['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.CreateResource(info)
          : new BadRequestException('Please Specify User Type');
      return query;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
  // TODO validate user
  async SignIn(data: Partial<ValidationDto>) {
    try {
      let user =
        data['type'] == 'FARMER'
          ? await this.farmer.FindByEmail(data)
          : data['type'] == 'ADMIN'
          ? await this.admin.FindByEmail(data)
          : data['type'] == 'EXTENSION_WORKER'
          ? await this.extensionWorker.FindByEmail(data)
          : new Error('Cant Find Any Users By that email');
      console.log(user);

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        },
      );

      user['access_token'] = this.jwtService.sign(data, {
        secret: process.env.HASH_SECRET || 'hash',
      });

      /*       const access_token =
        verification == true.
          ? {
              access_token: this.jwtService.sign(data, {
                secret: process.env.HASH_SECRET || 'hash',
              }),
            }
          : new UnauthorizedException();
 */ return user;
    } catch (error) {
      throw new UnauthorizedException(error);
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
          ? this.farmer.FindByEmail(data)
          : data['type'] == 'ADMIN'
          ? this.admin.FindByEmail(data)
          : data['type'] == 'EXTENSION_WORKER'
          ? this.extensionWorker.FindByEmail(data)
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
      throw new BadRequestException(error);
    }
  }
  // TODO add them to db
  async ForgotPassword(data: UpdateDto) {
    try {
      let change = await this.db.passwordReset.create({
        data: {
          newPassword: await hash(data['property']['newPassword'], {
            secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            type: 2,
          }),
          otp: generateTOTP(),
        },
      });
      this.mail.sendEmail(
        'danieltambee@gmail',
        'passwordReset',
        change['otp'],
        '0000',
      );
      // let user =
      //   data['type'] == 'FARMER'
      //     ? this.farmer.UpdatePassword(data)
      //     : data['type'] == 'ADMIN'
      //     ? this.admin.UpdatePassword(data)
      //     : data['type'] == 'EXTENSION_WORKER'

      //     ? this.extensionWorker.UpdatePassword(data)
      //     : new Error('Cant Find Any Users By that email');
      return change;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
6;
