import { Controller, Post, UseGuards } from '@nestjs/common';
import { CreateFarmerDto, FarmerService } from './farmer.service';
import { ApiTags } from '@nestjs/swagger';
import { ExtensionWorkerGuard } from '@app/lib/auth/extension-worker.guard';

@Controller('farmer')
@ApiTags('Farmer')
@UseGuards(ExtensionWorkerGuard)
export class FarmerController {
  /**
   *
   */
  constructor(private readonly farmer: FarmerService) {}
  @Post('Createfarmer')
  Create_Farmer(data: CreateFarmerDto) {
    return this.farmer.CreateResource(data);
  }
}
