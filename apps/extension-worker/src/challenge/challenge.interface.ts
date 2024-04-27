import { Challenge } from '@prisma/client';
import { CreateChallengeDto } from './dto/dto';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { BadRequestException } from '@nestjs/common';

export interface IChallenge {
  CreateChallenge(data: CreateChallengeDto): Promise<Challenge>;
  FindByid(data: FindDto): Promise<Challenge>;
  FindBytype(data: FindDto): Promise<Challenge>;
  FindBycustom_felids(data: FindDto): Promise<Challenge>;
  FindByvisitId(data: FindDto): Promise<Challenge>;
  UpdateProperty(data: UpdateDto): Promise<Challenge | BadRequestException>;
}
