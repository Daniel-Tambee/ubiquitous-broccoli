import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';

@Module({
  providers: [FarmerService]
})
export class Farmer {}
