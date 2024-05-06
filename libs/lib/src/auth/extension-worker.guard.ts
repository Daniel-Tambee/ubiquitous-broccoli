import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class ExtensionWorkerGuard implements CanActivate {
  /**
   *
   */
  constructor(private readonly jwt: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const token = context.switchToHttp().getRequest()['headers'][
        'authorization'
      ];
      const decoded = this.jwt.decode(token, {
        json: true,
      });
      const type = decoded['type'] !== 'EXTENSION_WORKER' ? false : true;
      /*       const type = context.switchToHttp().getRequest()['body']['type'];
      const valid = type == 'EXTENSION_WORKER' ? true : false;
      if (valid == false) {
        throw new ForbiddenException('wrong server');
      } else {
        return valid;
      }
 */ return type;
    } catch (error) {
      throw new ForbiddenException('wrong server');
    }
  }
}
