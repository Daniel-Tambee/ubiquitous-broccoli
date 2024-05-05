import { Body, Controller, Post } from '@nestjs/common';
import { CreateFarmerDto, FarmerService } from './farmer.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateDto } from './dto/dto';

@Controller('farmer')
@ApiTags('farmer')
// @UseGuards(ExtensionWorkerGuard)
export class FarmerController {
  /**
   *
   */
  constructor(private readonly farmer: FarmerService) {}
  @Post('Createfarmer')
  Create_Farmer(@Body() data: CreateFarmerDto) {
    return this.farmer.CreateResource(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto) {
    return this.farmer.UpdateProperties(data);
  }
}
