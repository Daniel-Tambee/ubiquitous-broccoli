import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { ValidationDto } from './dto/login-auth.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('Signup')
  Signup(@Body() info: CreateUserDto) {
    return this.authService.Signup(info);
  }
  @Post('SignIn')
  SignIn(@Body() data: ValidationDto) {
    return this.authService.SignIn(data);
  }
  @Post('SignOut')
  SignOut(@Body() data) {
    return this.authService.SignOut(data);
  }
  @Post('ForgotPassword')
  ForgotPassword(@Body() data: ValidationDto, @Body() update: string) {
    return this.authService.ForgotPassword(data, update);
  }
}
