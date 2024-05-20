import {
  BadRequestException,
  Body,
  Controller,
  Post,
  ValidationPipe,
} from '@nestjs/common';
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
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<
    { id: string; createdAt: Date; updatedAt: Date; workerProfileId: string }[]
  > {
    return this.profile.Getreports(data);
  }
  @Post('Addreport')
  Addreport(@Body(new ValidationPipe()) data: CreateReportDto): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    workerProfileId: string;
  }> {
    return this.profile.Addreport(data);
  }
  @Post('CreateProfile')
  CreateProfile(
    @Body(new ValidationPipe()) data: CreateProfileDto,
  ): Promise<WorkerProfile> {
    return this.profile.CreateProfile(data);
  }
  @Post('Getprojects')
  Getprojects(@Body(new ValidationPipe()) data: FindDto): Promise<Project[]> {
    return this.profile.Getprojects(data);
  }
  @Post('GetCooperative')
  GetCooperative(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<Cooperative[]> {
    return this.profile.GetCooperative(data);
  }
  @Post('Addproject')
  Addproject(
    @Body(new ValidationPipe()) data: CreateProjectDto,
  ): Promise<Project> {
    return this.profile.Addproject(data);
  }
  @Post('AddCooperative')
  AddCooperative(
    @Body(new ValidationPipe()) data: CreateCooperativeDto,
  ): Promise<Cooperative> {
    return this.profile.AddCooperative(data);
  }
  @Post('Removeproject')
  Removeproject(@Body(new ValidationPipe()) data: UpdateDto): Promise<boolean> {
    return this.profile.Removeproject(data);
  }
  @Post('Removereport')
  Removereport(@Body(new ValidationPipe()) data: UpdateDto): Promise<boolean> {
    return this.profile.Removereport(data);
  }
  @Post('RemoveCooperative')
  RemoveCooperative(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<boolean> {
    return this.profile.RemoveCooperative(data);
  }
  @Post('findByUserId')
  findByUserId(
    @Body(new ValidationPipe()) data: FindDto,
  ): Promise<WorkerProfile> {
    return this.profile.findByUserId(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Body(new ValidationPipe()) data: UpdateDto,
  ): Promise<WorkerProfile | BadRequestException> {
    return this.profile.UpdateProperty(data);
  }
}
