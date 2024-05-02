import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IIntervention } from './Intervention.interface';
import { Prisma, $Enums } from '@prisma/client';
import { CreateInterventionDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { InterventionService } from './intervention.service';

@Controller('Intervention')
@ApiTags('Intervention')
export class InterventionController implements IIntervention {
  /**
   *
   */
  constructor(private readonly service: InterventionService) {}
  @Post('createIntervention')
  createIntervention(@Body() data: CreateInterventionDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.createIntervention(data);
  }
  @Post('findById')
  findById(@Body() data: FindDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.findById(data);
  }
  @Post('findByAmount')
  findByAmount(@Body() data: FindDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.findByAmount(data);
  }
  @Post('findByType')
  findByType(@Body() data: FindDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.findByType(data);
  }
  @Post('findByFarmerProfileId')
  findByFarmerProfileId(@Body() data: FindDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.findByFarmerProfileId(data);
  }
  @Post('findByProjectId')
  findByProjectId(@Body() data: FindDto): Promise<{
    id: string;
    amount: number;
    custom_field: Prisma.JsonValue;
    type: $Enums.Intervention_type;
    createdAt: Date;
    updatedAt: Date;
    farmerProfileId: string;
    projectId: string;
  }> {
    return this.service.findByProjectId(data);
  }
  @Post('updateProperty')
  updateProperty(@Body() data: UpdateDto): Promise<
    | {
        id: string;
        amount: number;
        custom_field: Prisma.JsonValue;
        type: $Enums.Intervention_type;
        createdAt: Date;
        updatedAt: Date;
        farmerProfileId: string;
        projectId: string;
      }
    | BadRequestException
  > {
    return this.service.updateProperty(data);
  }
}
