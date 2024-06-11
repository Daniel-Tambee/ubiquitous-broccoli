import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { Iworker } from './iworker.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { User } from '@prisma/client';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';
import { WorkerService } from './worker.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('extension-worker')
@ApiTags('Extension Worker')
// @UseGuards(ExtensionWorkerGuard)
export class ExtensionWorkerController {
  constructor(private readonly worker: WorkerService) {}
  UpdatePassword(@Body(new ValidationPipe()) data: UpdateDto): Promise<User> {
    return this.worker.UpdatePassword(data);
  }
  @Post('FindById')
  FindById(@Body(new ValidationPipe()) data: FindDto): Promise<User> {
    return this.worker.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(@Body(new ValidationPipe()) data: FindDto): Promise<User> {
    return this.worker.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(@Body(new ValidationPipe()) data: FindDto): Promise<User> {
    return this.worker.FindByFirst_name(data);
  }
  /*   @Post('UpdateFirstName')
  UpdateFirstName(@Body(new ValidationPipe()) data: UpdateDto): Promise<User> {
    return this.worker.UpdateFirstName(data);
  }
  @Post('UpdateLastName')
  UpdateLastName(@Body(new ValidationPipe()) data: UpdateDto): Promise<User> {
    return this.worker.UpdateLastName(data);
  }
  @Post('UpdatePhoneNumber')
  UpdatePhoneNumber(@Body(new ValidationPipe()) data: UpdateDto): Promise<User> {
    return this.worker.UpdatePhoneNumber(data);
  }
 */ @Post('createExtensionWorker')
  CreateResource(
    @Body(new ValidationPipe()) data: CreateUserDto,
  ): Promise<User> {
    return this.worker.CreateResource(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(
    @Param('id') id: string,
    @Body() data: UpdateDto,
  ): Promise<User | BadRequestException> {
    return this.worker.UpdateProperties(data, id);
  }
  BadRequestException;
  @Post('FindByEmail')
  FindByEmail(@Body(new ValidationPipe()) data: ValidationDto): Promise<User> {
    return this.worker.FindByEmail(data);
  }
  @Post('getAllWorkers')
  getAllWorkers() {
    return this.worker.getAllWorkers();
  }

  @Get('getAllWorkersCount')
  getAllWorkersCount() {
    return this.worker.getAllExtensionWorkersCount();
  }

  SignOut() {
    return this.worker.SignOut();
  }
}
