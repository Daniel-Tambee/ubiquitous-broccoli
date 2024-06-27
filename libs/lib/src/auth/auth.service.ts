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
import { sign, verify as jwtVer, decode } from 'jsonwebtoken';
import { getPasswordResetSuccessTemplate } from '../getPasswordResetSuccessTemplate';

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
      info['password'] = await hash(info['password'], {
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
      let user;

      switch (data['type']) {
        case 'FARMER':
          user = await this.farmer.FindByEmail(data);
          break;
        case 'ADMIN':
          user = await this.admin.FindByEmail(data);
          break;
        case 'EXTENSION_WORKER':
          user = await this.extensionWorker.FindByEmail(data);
          break;
        default:
          throw new Error('Cant Find Any Users By that email');
      }

      if (!user) {
        throw new Error('User not found');
      }

      console.log(user);

      const verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        },
      );

      if (!verification) {
        throw new UnauthorizedException('Invalid password');
      }

      user['access_token'] = this.jwtService.sign(data, {
        secret: process.env.HASH_SECRET || 'hash',
      });

      return user;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(undefined, error.message);
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
          ? await this.farmer.FindByEmail(data)
          : data['type'] == 'ADMIN'
            ? await this.admin.FindByEmail(data)
            : data['type'] == 'EXTENSION_WORKER'
              ? await this.extensionWorker.FindByEmail(data)
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
      throw new BadRequestException(undefined, error);
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

      console.log(user);

      // Step 2: Generate a JWT reset token
      const resetToken = sign(
        { id: user.id, type: user.type },
        process.env.HASH_SECRET,
        { expiresIn: '1h' }
      );
      const resetLink = `${process.env.FRONTEND_URL}?token=${resetToken}`;

      // Step 3: Create a password reset entry in the database
      const change = await this.db.passwordReset.create({
        data: {
          resetToken: resetToken,
        },
        select: {
          id: true,
          resetToken: true,
        },
      });

      // Step 4: Send the reset email with the reset link
      await this.mail.sendEmail(
        user.email,
        'YolaFarms Password Reset',
        'Password RESET',
        getPasswordResetTemplate(user.first_name, resetLink),
      );

      // Step 5: Update the user's admin profile with the reset ID
      await this.db.adminProfile.update({
        where: {
          id: user['adminProfileId'],
        },
        data: {
          reset: {
            connect: {
              id: change.id,
            },
          },
        },
      });

      // Remove the reset token from response for security
      delete change.resetToken;
      return change;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(
        'Error processing password reset request',
        error.message || error,
      );
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

  async resetPassword(token: string, newPassword: string) {
    try {
      console.log(token);

      // Step 1: Decode and verify the reset token
      const decodedToken = jwtVer(token, process.env.HASH_SECRET);
      const dec = await decode(token, {

      })
      console.log(dec);

      // Step 2: Find the corresponding password reset entry
      const resetEntry = await this.db.passwordReset.findFirst({
        where: {
          resetToken: token,
        },
      });

      if (!resetEntry) {
        throw new Error('Invalid or expired reset token');
      }

      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: dec['id'],
          type: dec['type']
        }
      })

      // Step 3: Update the user's password
      await this.db.user.update({
        where: {
          id: dec['id'],
          type: dec['type']
        },
        data: {
          password: await hash(newPassword, {
            secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            type: 2,
          })
          // Use bcrypt or a similar library for hashing
        },
      });

      // Step 4: Delete the password reset entry to invalidate the token
      await this.db.passwordReset.delete({
        where: {
          id: resetEntry.id,
        },
      });

      await this.mail.sendEmail(
        user.email,
        'YolaFarms Successful Password Reset',
        'Password RESET',
        getPasswordResetSuccessTemplate(user.first_name),
      );

      return { message: 'Password reset successful' };
    } catch (error) {
      console.log(error);

      throw new BadRequestException(
        'Error resetting password',
        error.message || error,
      );
    }
  }

}
