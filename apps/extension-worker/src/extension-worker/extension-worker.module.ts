import { AuthController } from '@app/lib/auth/auth.controller';
import { AuthService } from '@app/lib/auth/auth.service';
import { Module } from '@nestjs/common';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { WorkerService } from './worker.service';
import { JwtService } from '@nestjs/jwt';
import { DbService } from '@app/lib/db/db.service';
import { ExtensionWorkerController } from './extension-worker.controller';
import { DisbursementModule } from '../disbursement/disbursement.module';
import { CooperativeModule } from '../cooperative/cooperative.module';
import { CropModule } from '../crop/crop.module';
import { MilestoneModule } from '../milestone/milestone.module';
import { ProfileModule } from '../profile/profile.module';
import { ProjectModule } from '../project/project.module';
import { ReportModule } from '../report/report.module';
import { ProjectController } from '../project/project.controller';
import { MilestoneController } from '../milestone/milestone.controller';
import { CooperativeController } from '../cooperative/cooperative.controller';
import { FarmerController } from 'apps/farmer/src/farmer/farmer.controller';
import { MilestoneService } from '../milestone/milestone.service';
import { ChallengeModule } from '../challenge/challenge.module';

@Module({
  imports: [
    DisbursementModule,
    CooperativeModule,
    CropModule,
    MilestoneModule,
    ProjectModule,
    ReportModule,
    ProfileModule,
    ChallengeModule,
  ],
  controllers: [
    AuthController,
    ExtensionWorkerController,
    MilestoneController,
    CooperativeController,
    FarmerController,
  ],
  providers: [
    AuthService,
    FarmerService,
    AdminService,
    WorkerService,
    JwtService,
    DbService,
    MilestoneService,
  ],
})
export class ExtensionWorkerModule {}
