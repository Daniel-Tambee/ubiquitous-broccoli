import { DbService } from '@app/lib/db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LolGovService {
  /**
   *
   */
  constructor(private readonly db: DbService) {}

  async getAllLocalGov() {
    return this.db.localGovernment.findMany();
  }

  async getFarmersByLocalGovernment(id: string) {
    return this.db.farmerProfile.findMany({
      where: {
        localGovernmentId: id,
      },
      include: {
        User: true,
        lga: true,
        household: true,
      },
    });
  }
}
