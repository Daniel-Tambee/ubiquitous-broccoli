import { User } from '@prisma/client';
import { CreateUserDto } from '../auth/dto/create-auth.dto';
import { ValidationDto } from '../auth/dto/login-auth.dto';

export interface IResource {
  CreateResource(data: CreateUserDto): Promise<User>;
  findByEmail(data: ValidationDto): Promise<User>;
  UpdatePassword(data: ValidationDto, update: string): Promise<User>;
  SignOut();
}
