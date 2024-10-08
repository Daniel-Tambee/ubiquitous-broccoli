import { Body, Controller, Get, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFarmerDto, UpdateDto } from './dto/dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { FindDto } from './dto/find.dto';
import { farmerBreakdown } from './farmerBreakdown';

@Controller('farmer')
@ApiTags('farmer')
// @UseGuards(ExtensionWorkerGuard)
export class FarmerController {
  /**
   *
   */
  constructor(private readonly farmer: FarmerService) { }
  @Post('FindByEmail')
  FindByEmail(data: Partial<ValidationDto>) {
    return this.farmer.FindByEmail(data);
  }
  @Post('FindById')
  FindById(@Body(new ValidationPipe()) data: FindDto) {
    return this.farmer.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(@Body(new ValidationPipe()) data: FindDto) {
    return this.farmer.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(@Body(new ValidationPipe()) data: FindDto) {
    return this.farmer.FindByFirst_name(data);
  }
  @Post('Createfarmer')
  Create_Farmer(@Body(new ValidationPipe()) data: CreateFarmerDto) {
    return this.farmer.CreateResource(data);
  }
  @Post('getAllFarmers')
  getAllFarmers() {
    return this.farmer.getAllFarmers();
  }
  @Post('getAllProjects')
  getAllProjects(@Body(new ValidationPipe()) data: FindDto) {
    return this.farmer.getAllProjects(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body(new ValidationPipe()) data: UpdateDto) {
    return this.farmer.UpdateProperties(data);
  }
  @Get('farmerCount')
  async farmerCount() {
    return await this.farmer.getAllFarmersCount();
  }
  @Get('getFarmerMilestones')
  async getFarmerMilestones(@Query("farmerProfileId") id: string) {
    return await this.farmer.getFarmerMilestones(id);
  }
  @Get('getFarmerBreakdown')
  async getFarmerBreakdown(): Promise<farmerBreakdown[]> {
    return await this.farmer.getFarmerBreakdown();
  }

  @Get('getFarmersByWorkerId')
  async getFarmersByWorkerId(@Query("workerId") workerId: string) {
    return await this.farmer.getFarmersByWorkerId(workerId);
  }

}
