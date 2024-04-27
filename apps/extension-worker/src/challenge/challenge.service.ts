import { Injectable } from '@nestjs/common';
import { IChallenge } from './challenge.interface';
import { Challenge } from '@prisma/client';

@Injectable()
export class ChallengeService implements IChallenge {
  CreateChallenge(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  FindBytype(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  FindBycustom_felids(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  FindByvisitId(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
  UpdateProperty(data: any): Promise<Challenge> {
    throw new Error('Method not implemented.');
  }
}
