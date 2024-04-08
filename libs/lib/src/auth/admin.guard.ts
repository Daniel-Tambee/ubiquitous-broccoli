import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { verify } from 'jsonwebtoken';
import { Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import { ValidationDto } from './dto/login-auth.dto';

@Injectable()
export class AdminGuard
  extends PassportStrategy(Strategy)
  implements CanActivate
{
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const token = context.switchToHttp().getRequest()['headers'][
        'authorization'
      ];
      const user = verify(token, process.env.HASH_SECRET) as ValidationDto;
      const valid = user['type'] == 'ADMIN' ? true : false;
      if (valid !== true) {
        throw new ForbiddenException('wrong server');
      } else {
        return valid;
      }
    } catch (error) {
      throw new ForbiddenException('wrong server');
    }
  }
}
