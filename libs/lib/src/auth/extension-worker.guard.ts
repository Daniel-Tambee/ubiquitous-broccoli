import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ExtensionWorkerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const type = context.switchToHttp().getRequest()['body']['type'];
      const valid = type == 'EXTENSION_WORKER' ? true : false;
      if (valid == false) {
        throw new ForbiddenException('wrong server');
      } else {
        return valid;
      }
    } catch (error) {
      throw new ForbiddenException('wrong server');
    }
  }
}
