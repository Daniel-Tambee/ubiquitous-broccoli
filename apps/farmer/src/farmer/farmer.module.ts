import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  providers: [FarmerService,DbService]
})
export class Farmer {}
