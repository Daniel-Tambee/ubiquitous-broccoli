import { Module } from '@nestjs/common';
import { AuthController } from '@app/lib/auth/auth.controller';
import { Admin } from './admin/admin.module';
import { AuthService } from '@app/lib/auth/auth.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { AdminService } from './admin/admin.service';
import { WorkerService } from 'apps/extension-worker/src/extension-worker/worker.service';
import { JwtService } from '@nestjs/jwt';
import { DbService } from '@app/lib/db/db.service';

@Module({
  imports: [Admin],
  controllers: [AuthController],
  providers: [AuthService,FarmerService,AdminService,WorkerService,JwtService,DbService],
})
export class AdminModule {}
