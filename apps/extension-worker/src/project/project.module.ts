import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { DbService } from '@app/lib/db/db.service';
import { ProfileService } from '../profile/profile.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { WorkerService } from '../extension-worker/worker.service';
import { MailService } from '@app/lib/email/email.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ProfileService, AuthService, FarmerService, AdminService, WorkerService, JwtService, MailService, DbService],
})
export class ProjectModule { }
