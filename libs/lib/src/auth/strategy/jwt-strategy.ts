import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { ValidationDto } from '../dto/login-auth.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly auth: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
      ignoreExpiration: false,
      expiresIn: '48h',
    });
  }

  async validate(data: ValidationDto) {
    let user = {
      email: data['email'],
      password: data['password'],
      type: data['type'],
    };
    // TODO rectify this
    const validate = await this.auth.validate(user);
    return validate;
  }
}
