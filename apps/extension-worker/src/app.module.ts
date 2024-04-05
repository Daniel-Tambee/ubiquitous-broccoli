import { Module } from '@nestjs/common';
import { AuthController } from '@app/lib/auth/auth.controller';
import { ExtensionWorkerModule } from './extension-worker/extension-worker.module';
import { WorkerService } from './extension-worker/worker.service';
import { AuthService } from '@app/lib/auth/auth.service';

@Module({
  imports: [ExtensionWorkerModule],
  controllers: [AuthController],
  providers: [WorkerService,AuthService],
})
export class AppModule {}
