import { Module } from '@nestjs/common';
import { AuthController } from '@app/lib/auth/auth.controller';
import { Admin } from './admin/admin.module';
import { AuthService } from '@app/lib/auth/auth.service';

@Module({
  imports: [Admin],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AdminModule {}
