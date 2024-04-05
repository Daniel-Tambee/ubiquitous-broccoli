import { AuthController } from '@app/lib/auth/auth.controller';
import { AuthService } from '@app/lib/auth/auth.service';
import { Module } from '@nestjs/common';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { WorkerService } from './worker.service';
import { JwtService } from '@nestjs/jwt';
import { DbService } from '@app/lib/db/db.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,FarmerService,AdminService,WorkerService,JwtService,DbService],
})
export class ExtensionWorkerModule {}
