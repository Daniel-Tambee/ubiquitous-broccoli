import { Injectable } from '@nestjs/common';
import { IAdmin } from './iadmin.interface';

@Injectable()
export class AdminService implements IAdmin {
  UpdatePassword() {
    throw new Error('Method not implemented.');
  }
  findByEmail() {
    throw new Error('Method not implemented.');
  }
  CreateResource() {
    throw new Error('Method not implemented.');
  }
}
