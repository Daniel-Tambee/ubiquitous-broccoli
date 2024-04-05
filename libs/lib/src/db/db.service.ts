import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super({
      datasourceUrl: process.env.DATABASE_URL,
    });
  }
}
