import { AuthController } from '@app/lib/auth/auth.controller';
import { AuthService } from '@app/lib/auth/auth.service';
import { Module } from '@nestjs/common';
import { AdminService } from 'apps/admin/src/admin/admin.service';
import { FarmerService } from 'apps/farmer/src/farmer/farmer.service';
import { WorkerService } from './worker.service';
import { JwtService } from '@nestjs/jwt';
import { DbService } from '@app/lib/db/db.service';
import { ExtensionWorkerController } from './extension-worker.controller';
import { InterventionModule } from '../Intervention/Intervention.module';
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
import { CooperativeService } from '../cooperative/cooperative.service';
import { ProjectService } from '../project/project.service';
import { ProfileService } from '../profile/profile.service';
import { VisitModule } from '../visit/visit.module';
import { AppointmentModule } from '../appointment/appointment.module';
import { AppointmentController } from '../appointment/appointment.controller';
import { AppointmentService } from '../appointment/appointment.service';
import { FarmerModule } from 'apps/farmer/src/farmer.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    InterventionModule,
    CooperativeModule,
    CropModule,
    MilestoneModule,
    ProjectModule,
    ReportModule,
    ProfileModule,
    ChallengeModule,
    VisitModule,
    InterventionModule,
    AppointmentModule,
    FarmerModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [
    AuthController,
    ExtensionWorkerController,
    MilestoneController,
    CooperativeController,
    ProjectController,
    AppointmentController,
  ],
  providers: [
    AuthService,
    FarmerService,
    AdminService,
    WorkerService,
    JwtService,
    DbService,
    MilestoneService,
    CooperativeService,
    ProjectService,
    ProfileService,
    AppointmentService,
  ],
})
export class ExtensionWorkerModule {}
