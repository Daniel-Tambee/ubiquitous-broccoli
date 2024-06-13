import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../email/email.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService ,JwtService,MailService]
})
export class AuthModule {}
