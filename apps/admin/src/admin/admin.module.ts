import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthService } from '@app/lib/auth/auth.service';

@Module({
  providers: [AdminService],
})
export class Admin {}
