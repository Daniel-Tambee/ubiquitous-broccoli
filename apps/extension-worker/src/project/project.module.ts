import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { DbService } from '@app/lib/db/db.service';
import { ProfileService } from '../profile/profile.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, DbService, ProfileService],
})
export class ProjectModule {}
