import { Injectable } from '@nestjs/common';
import { IFarmer } from './ifarmer.interface';

@Injectable()
export class FarmerService implements IFarmer {
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
