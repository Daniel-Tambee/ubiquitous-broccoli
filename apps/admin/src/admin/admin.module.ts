import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { DbService } from '@app/lib/db/db.service';
import { AdminController } from './admin.controller';

@Module({
  providers: [AdminService,DbService],
  controllers: [AdminController],
})
export class Admin {}
