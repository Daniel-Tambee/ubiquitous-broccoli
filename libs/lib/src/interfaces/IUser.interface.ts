import { User } from '@prisma/client';
import { CreateUserDto } from '../auth/dto/create-auth.dto';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { ValidationDto } from '../auth/dto/login-auth.dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';

// TODO condense all update methods
export interface IUser {
  CreateResource(data: CreateUserDto): Promise<User>;
  FindByEmail(data: ValidationDto): Promise<User>;
  UpdatePassword(data: UpdateDto): Promise<User>;
  UpdateFirstName(data: UpdateDto);
  UpdateLastName(data: UpdateDto): Promise<User>;
  UpdatePhoneNumber(data: UpdateDto): Promise<User>;
  FindById(data: FindDto): Promise<User>;
  FindByPhone_Number(data: FindDto): Promise<User>;
  FindByFirst_name(data: FindDto): Promise<User>;
}
