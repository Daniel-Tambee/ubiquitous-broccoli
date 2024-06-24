import { Module } from '@nestjs/common';
import { CooperativeController } from './cooperative.controller';
import { CooperativeService } from './cooperative.service';
import { DbService } from '@app/lib/db/db.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from '../extension-worker/worker.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '@app/lib/email/email.service';

@Module({
  controllers: [CooperativeController],
  providers: [CooperativeService,DbService,AuthService,FarmerService,AdminService,WorkerService,JwtService,MailService]
})
export class CooperativeModule {}
