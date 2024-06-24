import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { DbService } from '@app/lib/db/db.service';
import { AuthModule } from '@app/lib/auth/auth.module';
import { MailService } from '@app/lib/email/email.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { WorkerService } from '../extension-worker/worker.service';

@Module({
  imports: [AuthModule],
  providers: [ChallengeService, DbService,AuthService,FarmerService,AdminService,WorkerService,JwtService,MailService],
  controllers: [ChallengeController],
})
export class ChallengeModule { }
