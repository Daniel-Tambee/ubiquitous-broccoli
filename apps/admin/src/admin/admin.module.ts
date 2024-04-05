import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthService } from '@app/lib/auth/auth.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  providers: [AdminService,DbService],
})
export class Admin {}
