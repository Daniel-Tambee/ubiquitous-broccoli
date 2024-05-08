import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Iworker } from './iworker.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { User } from '@prisma/client';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';
import { WorkerService } from './worker.service';
import { ApiTags } from '@nestjs/swagger';
import { ExtensionWorkerGuard } from '@app/lib/auth/extension-worker.guard';

@Controller('extension-worker')
@ApiTags('Extension Worker')
// @UseGuards(ExtensionWorkerGuard)
export class ExtensionWorkerController {
  constructor(private readonly worker: WorkerService) {}
  UpdatePassword(@Body() data: UpdateDto): Promise<User> {
    return this.worker.UpdatePassword(data);
  }
  @Post('FindById')
  FindById(@Body() data: FindDto): Promise<User> {
    return this.worker.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(@Body() data: FindDto): Promise<User> {
    return this.worker.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(@Body() data: FindDto): Promise<User> {
    return this.worker.FindByFirst_name(data);
  }
  /*   @Post('UpdateFirstName')
  UpdateFirstName(@Body() data: UpdateDto): Promise<User> {
    return this.worker.UpdateFirstName(data);
  }
  @Post('UpdateLastName')
  UpdateLastName(@Body() data: UpdateDto): Promise<User> {
    return this.worker.UpdateLastName(data);
  }
  @Post('UpdatePhoneNumber')
  UpdatePhoneNumber(@Body() data: UpdateDto): Promise<User> {
    return this.worker.UpdatePhoneNumber(data);
  }
 */ @Post('createExtensionWorker')
  CreateResource(data: CreateUserDto): Promise<User> {
    return this.worker.CreateResource(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto): Promise<User | BadRequestException> {
    return this.worker.UpdateProperties(data);
  }
  BadRequestException;
  @Post('FindByEmail')
  FindByEmail(@Body() data: ValidationDto): Promise<User> {
    return this.worker.FindByEmail(data);
  }
  @Post('getAllWorkers')
  getAllWorkers() {
    return this.worker.getAllWorkers();
  }
  SignOut() {
    return this.worker.SignOut();
  }
}
