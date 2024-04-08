import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { User } from '@prisma/client';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '@app/lib/auth/admin.guard';

@Controller('admin')
@ApiTags('Admin')
@UseGuards(AdminGuard)
export class AdminController {
  constructor(private readonly admin: AdminService) {}
  UpdatePassword(@Body() data: UpdateDto): Promise<User> {
    return this.admin.UpdatePassword(data);
  }
  @Post('FindById')
  FindById(@Body() data: FindDto): Promise<User> {
    return this.admin.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(@Body() data: FindDto): Promise<User> {
    return this.admin.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(@Body() data: FindDto): Promise<User> {
    return this.admin.FindByFirst_name(data);
  }
  @Post('UpdateFirstName')
  UpdateFirstName(@Body() data: UpdateDto): Promise<User> {
    return this.admin.UpdateFirstName(data);
  }
  @Post('UpdateLastName')
  UpdateLastName(@Body() data: UpdateDto): Promise<User> {
    return this.admin.UpdateLastName(data);
  }
  @Post('UpdatePhoneNumber')
  UpdatePhoneNumber(@Body() data: UpdateDto): Promise<User> {
    return this.admin.UpdatePhoneNumber(data);
  }
  CreateResource(data: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByEmail')
  FindByEmail(@Body() data: ValidationDto): Promise<User> {
    return this.admin.FindByEmail(data);
  }
  SignOut() {
    return this.admin.SignOut();
  }
}
