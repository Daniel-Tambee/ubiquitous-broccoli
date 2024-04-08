import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';


// TODO check jwt for user type
@Injectable()
export class FamrerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const type = context.switchToHttp().getRequest()['body']['type'];
      const valid = type == 'FARMER' ? true : false;
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
