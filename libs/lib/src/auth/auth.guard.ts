import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { verify } from 'jsonwebtoken';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Observable, retry } from 'rxjs';
import { AuthService } from './auth.service';
import { ValidationDto } from './dto/login-auth.dto';

@Injectable()
export class AuthGuard
  extends PassportStrategy(Strategy)
  implements CanActivate {
  /**
   *
   */
  constructor(private readonly auth: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.HASH_SECRET,
    });
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      // const HeaderbearerToken = context.switchToHttp().getRequest()['headers'][
      //   'authorization'
      // ] as string;
      // const bearerToken = verify(HeaderbearerToken, process.env.HASH_SECRET);
      // const val = this.validate(bearerToken as ValidationDto);
      // return Boolean(val);
      return true
    } catch (error) {
      console.log(error.message + ',\njwt is missing');
    }
  }
  async validate(bearerToken: ValidationDto) {
    try {
      const user = await this.auth.validate(bearerToken);
      console.log(user);

      return user;
    } catch (error) {
      throw new BadRequestException(undefined, error)
    }
    /*       bearerToken.staffId !== undefined
        ? await this.staffAuth.validateUser(
            bearerToken.email,
            bearerToken.staffId,
          )
        : await this.studentAuth.validateUser(
            bearerToken.email,
            bearerToken.password,
            );
            console.log(user);
            return user
            */
  }
}
