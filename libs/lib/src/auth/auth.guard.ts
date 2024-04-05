import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { verify } from 'jsonwebtoken';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard
  extends PassportStrategy(Strategy)
  implements CanActivate
{
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
      const HeaderbearerToken = context.switchToHttp().getRequest()['headers'][
        'authorization'
      ] as string;
      const bearerToken = verify(HeaderbearerToken, process.env.HASH_SECRET);
      const val = this.validate(bearerToken as Map<string, any>);
      return Boolean(val);
    } catch (error) {
      console.log(error.message + ',\njwt is missing');
    }
  }
  // TODO fix the vaildate function
  async validate(bearerToken: Map<string, any>) {
    const user = await this.auth.validate();
    return user;
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
