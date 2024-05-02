import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IChallenge } from './challenge.interface';
import { $Enums, Challenge, Prisma, Visit } from '@prisma/client';
import { UpdateDto } from './dto/update_dto';
import { ChallengeService } from './challenge.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('challenge')
@ApiTags('Challenge')
export class ChallengeController implements IChallenge {
  /**
   *
   */
  constructor(private readonly service: ChallengeService) {}
  @Post('CreateChallenge')
  CreateChallenge(
    @Body()
    data: {
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      visitId: string;
    },
  ): Promise<Challenge> {
    return this.service.CreateChallenge(data);
  }
  @Post('FindByid')
  FindByid(
    @Body()
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    return this.service.FindByid(data);
  }
  @Post('FindBytype')
  FindBytype(
    @Body()
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    return this.service.FindBytype(data);
  }
  @Post('FindBycustom_felids')
  FindBycustom_felids(
    @Body()
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    return this.service.FindBycustom_felids(data);
  }
  @Post('FindByvisitId')
  FindByvisitId(
    @Body()
    data: Partial<{
      id: string;
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      createdAt: Date;
      updatedAt: Date;
      visitId: string;
    }>,
  ): Promise<Challenge> {
    return this.service.FindByvisitId(data);
  }

  @Post('UpdateProperty')
  UpdateProperty(
    @Body() data: UpdateDto,
  ): Promise<Challenge | BadRequestException> {
    return this.service.UpdateProperty(data);
  }
}
