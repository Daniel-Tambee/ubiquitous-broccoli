import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IProfile } from './profile.interface';
import {
  $Enums,
  Cooperative,
  Prisma,
  Project,
  WorkerProfile,
} from '@prisma/client';
import { CreateCooperativeDto } from '../cooperative/dto/dto';
import { CreateProjectDto } from '../project/dto/dto';
import { CreateReportDto } from '../report/dto/dto';
import { CreateProfileDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { ProfileService } from './profile.service';

@Controller('profile')
@ApiTags('profile')
export class ProfileController implements IProfile {
  /**
   *
   */
  constructor(private readonly profile: ProfileService) {}
  @Post('Getreports')
  Getreports(
    @Body() data: FindDto,
  ): Promise<
    { id: string; createdAt: Date; updatedAt: Date; workerProfileId: string }[]
  > {
    throw new Error('Method not implemented.');
  }
  @Post('Addreport')
  Addreport(@Body() data: CreateReportDto): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    throw new Error('Method not implemented.');
  }
  @Post('CreateProfile')
  CreateProfile(@Body() data: CreateProfileDto): Promise<WorkerProfile> {
    throw new Error('Method not implemented.');
  }
  @Post('Getprojects')
  Getprojects(@Body() data: FindDto): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }
  @Post('GetCooperative')
  GetCooperative(@Body() data: FindDto): Promise<Cooperative[]> {
    throw new Error('Method not implemented.');
  }
  @Post('Addproject')
  Addproject(@Body() data: CreateProjectDto): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  @Post('AddCooperative')
  AddCooperative(@Body() data: CreateCooperativeDto): Promise<Cooperative> {
    throw new Error('Method not implemented.');
  }
  @Post('Removeproject')
  Removeproject(@Body() data: UpdateDto): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  @Post('Removereport')
  Removereport(@Body() data: UpdateDto): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  @Post('RemoveCooperative')
  RemoveCooperative(@Body() data: UpdateDto): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  @Post('findByUserId')
  findByUserId(@Body() data: FindDto): Promise<WorkerProfile> {
    throw new Error('Method not implemented.');
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto): Promise<WorkerProfile|BadRequestException> {
    return this.profile.UpdateProperty(data);
  }
}
