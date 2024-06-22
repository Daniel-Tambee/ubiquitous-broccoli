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
import { generateTOTP, verifyTOTP } from '../otp_generation';
import { MailService } from '../email/email.service';
import { getPasswordResetTemplate } from '../emailTemplate';

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
  ) { }

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
      console.log(error);

      throw new UnauthorizedException(undefined, error);
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
      // Step 1: Retrieve the user based on email and type
      const user = await this.db.user.findFirstOrThrow({
        where: {
          email: data['property']['email'],
          type: data['type'],
        },
      });

      // Step 2: Generate a new hashed password and OTP
      const newPassword = await hash(data['property']['newPassword'], {
        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        type: 2,
      });
      const otp = generateTOTP();

      // Step 3: Create a password reset entry in the database
      const change = await this.db.passwordReset.create({
        data: {
          newPassword: newPassword,
          otp: otp,
        },
        select: {
          id: true,
          otp: true,
        },
      });

      // Step 4: Update the user's admin profile with the reset ID
      await this.db.user.update({
        where: {
          email: data['property']['email'],
        },
        data: {
          adminProfile: {
            update: {
              reset: {
                connect: {
                  id: change.id,
                },
              },
            },
          },
        },
      });

      // Step 5: Send the reset email to the user
      await this.mail.sendEmail(
        user.email,
        'YolaFarms PasswordReset',
        change.otp,
        getPasswordResetTemplate(user.first_name, change.otp),
      );

      // Remove OTP from response for security
      delete change.otp;
      return change;
    } catch (error) {
      throw new BadRequestException(
        'Error processing password reset request',
        error.message || error,
      );
    }
  }

  async verifyOtp(data: UpdateDto) {
    try {
      console.log(data);

      // Retrieve the new password from the database
      const passwordReset = await this.db.passwordReset.findFirstOrThrow({
        where: { id: data['property']['ResetId'] },
      });

      const email = await this.db.user.findFirst({
        where: {
          email: data['property']['email']
        }
      })
      // Extract the OTP and new password
      const otp = data['property']['otp'];
      const newPassword = passwordReset.newPassword;

      // Verify the OTP
      // const verified = verifyTOTP(otp);
      // if (!verified) {
      //   throw new BadRequestException(undefined, 'Invalid or expired OTP');
      // }

      // Update the data object with the new password
      data['property']['password'] = newPassword;
      delete data['property']['ResetId'];
      delete data['property']['otp'];
      console.log(data);

      // Handle the password update based on the user type
      // await this.updatePasswordByUserType(data);

      return true;
    } catch (error) {
      throw new BadRequestException(undefined, error.message || error);
    }
  }

  private async updatePasswordByUserType(data: UpdateDto) {
    const { type } = data;

    switch (type) {
      case 'FARMER':
        await this.farmer.UpdatePassword(data);
        break;
      case 'ADMIN':
        await this.admin.UpdatePassword(data);
        break;
      case 'EXTENSION_WORKER':
        await this.extensionWorker.UpdatePassword(data);
        break;
      default:
        throw new Error('Cannot find any users by that type');
    }
  }
}
