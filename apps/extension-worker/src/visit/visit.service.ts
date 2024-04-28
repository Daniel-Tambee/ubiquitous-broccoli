import { Injectable } from '@nestjs/common';
import { IVisit } from './ivisit.interface';
import { Visit } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';

@Injectable()
export class VisitService implements IVisit {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  CreateVisit(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Addphotos(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Addmilestone(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Addchallenge(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Removephotos(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Removemilestone(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Removechallenge(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Getphotos(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Getmilestone(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  Getchallenge(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  FindBystatus(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  FindBymilestoneId(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  FindByappointmentId(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  FindByprojectId(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
  UpdateProperties(data: any): Promise<Visit> {
    throw new Error('Method not implemented.');
  }
}
