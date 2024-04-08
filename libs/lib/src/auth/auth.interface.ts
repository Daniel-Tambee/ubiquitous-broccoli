import { CreateUserDto } from './dto/create-auth.dto';
import { ValidationDto } from './dto/login-auth.dto';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';

export interface IAuth {
  Signup(info: CreateUserDto);
  SignIn(data: ValidationDto): Promise<any>;
  SignOut(data: Map<string, any>): Promise<void>;
  validate(data: ValidationDto): Promise<any>;
  ForgotPassword(data: UpdateDto): Promise<any>;
}
