import { CreateUserDto } from './dto/create-auth.dto';
import { ValidationDto } from './dto/login-auth.dto';

export interface IAuth {
  Signup(info: CreateUserDto);
  SignIn(data: ValidationDto): Promise<any>;
  SignOut(data: Map<string, any>): Promise<void>;
  validate(data: ValidationDto): Promise<any>;
  ForgotPassword(data: ValidationDto, update: String): Promise<any>;
}
