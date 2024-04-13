import { Module } from '@nestjs/common';
import { AuthController } from '@app/lib/auth/auth.controller';
import { ExtensionWorkerModule } from './extension-worker/extension-worker.module';
import { WorkerService } from './extension-worker/worker.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { CooperativeModule } from './cooperative/cooperative.module';
import { CropModule } from './crop/crop.module';
import { MilestoneModule } from './milestone/milestone.module';
import { ReportModule } from './report/report.module';
import { DisbursementModule } from './disbursement/disbursement.module';

@Module({
  imports: [
    ExtensionWorkerModule,
    ProfileModule,
    ProjectModule,
    CooperativeModule,
    CropModule,
    MilestoneModule,
    ReportModule,
    DisbursementModule,
  ],
  controllers: [AuthController],
  providers: [WorkerService, AuthService],
})
export class AppModule {}
