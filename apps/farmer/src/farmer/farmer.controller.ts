import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { IFarmer } from './ifarmer.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { User } from '@prisma/client';
import { FarmerService } from './farmer.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateDto } from './dto/dto';
import { FindDto } from './dto/find.dto';
import { FamrerGuard } from '@app/lib/auth/famrer.guard';

@Controller('farmer')
@ApiTags('Farmer')
@UseGuards(FamrerGuard)
export class FarmerController implements IFarmer {
  /**
   *
   */
  constructor(private readonly farmer: FarmerService) {}
  UpdatePassword(@Body() data: UpdateDto): Promise<User> {
    return this.farmer.UpdatePassword(data);
  }
  @Post('FindById')
  FindById(@Body() data: FindDto): Promise<User> {
    return this.farmer.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(@Body() data: FindDto): Promise<User> {
    return this.farmer.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(@Body() data: FindDto): Promise<User> {
    return this.farmer.FindByFirst_name(data);
  }
  @Post('UpdateFirstName')
  UpdateFirstName(@Body() data: UpdateDto): Promise<User> {
    return this.farmer.UpdateFirstName(data);
  }
  @Post('UpdateLastName')
  UpdateLastName(@Body() data: UpdateDto): Promise<User> {
    return this.farmer.UpdateLastName(data);
  }
  @Post('UpdatePhoneNumber')
  UpdatePhoneNumber(@Body() data: UpdateDto): Promise<User> {
    return this.farmer.UpdatePhoneNumber(data);
  }
  CreateResource(data: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Post('FindByEmail')
  FindByEmail(@Body() data: ValidationDto): Promise<User> {
    return this.farmer.FindByEmail(data);
  }
  SignOut() {
    return this.farmer.SignOut();
  }
}
