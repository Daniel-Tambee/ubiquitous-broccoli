import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../email/email.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { DbService } from '../db/db.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FarmerService, AdminService, WorkerService, JwtService, MailService,DbService]
})
export class AuthModule { }
