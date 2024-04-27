import { Challenge } from '@prisma/client';

export interface IChallenge {
  CreateChallenge(data): Promise<Challenge>;
  FindByid(data): Promise<Challenge>;
  FindBytype(data): Promise<Challenge>;
  FindBycustom_felids(data): Promise<Challenge>;
  FindByvisitId(data): Promise<Challenge>;
  UpdateProperty(data): Promise<Challenge>;
}
