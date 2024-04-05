import { Injectable } from '@nestjs/common';
import { Iworker } from './iworker.interface';

@Injectable()
export class WorkerService implements Iworker {
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
