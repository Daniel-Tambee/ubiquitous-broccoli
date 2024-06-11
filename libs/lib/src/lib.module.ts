import { Module } from '@nestjs/common';
import { LibService } from './lib.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { EmailModule } from './email/email.module';

@Module({
  providers: [LibService],
  exports: [LibService],
  imports: [AuthModule, DbModule, EmailModule],
})
export class LibModule {}
