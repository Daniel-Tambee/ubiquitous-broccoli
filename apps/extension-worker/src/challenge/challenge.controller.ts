import { BadRequestException, Body, Controller } from '@nestjs/common';
import { IChallenge } from './challenge.interface';
import { $Enums, Prisma } from '@prisma/client';
import { UpdateDto } from './dto/update_dto';
import { ChallengeService } from './challenge.service';

@Controller('challenge')
export class ChallengeController implements IChallenge {
  /**
   *
   */
  constructor(private readonly service: ChallengeService) {}
  CreateChallenge(
    @Body()
    data: {
      type: $Enums.ChallengeType;
      custom_fields: Prisma.JsonValue;
      visitId: string;
    },
  ): Promise<{
    id: string;
    type: $Enums.ChallengeType;
    custom_fields: Prisma.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    visitId: string;
  }> {
    return this.service.CreateChallenge(data);
  }
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
  ): Promise<{
    id: string;
    type: $Enums.ChallengeType;
    custom_fields: Prisma.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    visitId: string;
  }> {
    return this.service.FindByid(data);
  }
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
  ): Promise<{
    id: string;
    type: $Enums.ChallengeType;
    custom_fields: Prisma.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    visitId: string;
  }> {
    return this.service.FindBytype(data);
  }
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
  ): Promise<{
    id: string;
    type: $Enums.ChallengeType;
    custom_fields: Prisma.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    visitId: string;
  }> {
    return this.service.FindBycustom_felids(data);
  }
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
  ): Promise<{
    id: string;
    type: $Enums.ChallengeType;
    custom_fields: Prisma.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    visitId: string;
  }> {
    return this.service.FindByvisitId(data);
  }
  UpdateProperty(@Body() data: UpdateDto): Promise<
    | {
        id: string;
        type: $Enums.ChallengeType;
        custom_fields: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
        visitId: string;
      }
    | BadRequestException
  > {
    return this.service.UpdateProperty(data);
  }
}
