import { Controller, Post, Body, ValidationPipe, BadRequestException, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { ValidationDto } from './dto/login-auth.dto';
import { IAuth } from './auth.interface';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController implements IAuth {
  constructor(private readonly authService: AuthService) { }
  validate(data: ValidationDto): Promise<any> {
    throw new Error('Method not implemented.');
  }
  @Post('Signup')
  Signup(@Body() info: CreateUserDto) {
    return this.authService.Signup(info);
  }
  @Post('SignIn')
  SignIn(@Body() data: ValidationDto) {
    return this.authService.SignIn(data);
  }
  @Post('SignOut')
  SignOut(@Body(new ValidationPipe()) data) {
    return this.authService.SignOut(data);
  }
  @Post('ForgotPassword')
  ForgotPassword(@Body() data: UpdateDto) {

    return this.authService.ForgotPassword(data);
  }
  @Post('reset-password')
  async resetPassword(@Query('token') token: string, @Body('newPassword') newPassword: string) {
    try {

      const result = await this.authService.resetPassword(token, newPassword);
      return { message: result.message };
    } catch (error) {
      throw new BadRequestException('Failed to reset password', error.message);
    }
  }
}
