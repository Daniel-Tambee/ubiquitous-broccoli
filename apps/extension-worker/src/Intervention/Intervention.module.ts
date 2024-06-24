import { Module } from '@nestjs/common';
import { InterventionController } from './Intervention.controller';
import { InterventionService } from './intervention.service';
import { DbService } from '@app/lib/db/db.service';
import { AuthModule } from '@app/lib/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [InterventionController],
  providers: [InterventionService, DbService],
})
export class InterventionModule { }
