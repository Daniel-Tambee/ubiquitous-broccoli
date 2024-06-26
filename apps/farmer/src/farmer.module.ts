import { Module } from '@nestjs/common';
import { AuthController } from '@app/lib/auth/auth.controller';
import { AuthService } from '@app/lib/auth/auth.service';
import { Farmer } from './farmer/farmer.module';
import { DbService } from '@app/lib/db/db.service';
import { FarmerService } from './farmer/farmer.service';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { JwtService } from '@nestjs/jwt';
import { FarmerController } from './farmer/farmer.controller';
import { MailService } from '@app/lib/email/email.service';

@Module({
  imports: [Farmer],
  controllers: [FarmerController],
  providers: [
    AuthService,
    FarmerService,
    DbService,
    AdminService,
    WorkerService,
    JwtService,
    MailService
  ],
})
export class FarmerModule {}
