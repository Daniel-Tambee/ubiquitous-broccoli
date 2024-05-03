import { BadRequestException, Injectable } from '@nestjs/common';
import { IAppointment } from './appointment.interface';
import { $Enums, Appointment, Visit } from '@prisma/client';
import { FindDto } from './dto/find_dto';
import { UpdateDto } from './dto/update_dto';
import { DbService } from '@app/lib/db/db.service';

@Injectable()
export class AppointmentService implements IAppointment {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async ScheduleAppointment(
    data: Partial<
      Omit<
        {
          id: string;
          time: Date;
          status: $Enums.Appointment_Status;
          workerProfileId: string;
          createdAt: Date;
          updatedAt: Date;
        },
        'id' | 'createdAt' | 'updatedAt'
      >
    >,
  ): Promise<Appointment> {
    try {
      let query = await this.db.appointment.create({
        data: {
          status: data['status'],
          time: data['time'],
          workerProfileId: data['workerProfileId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async GetVisits(data: FindDto): Promise<Visit[]> {
    try {
      let query = await this.db.visit.findMany({
        where: {
          appointmentId: data['properties']['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async AddVisit(data: UpdateDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.update({
        where: {
          id: data['id'],
        },
        data: {
          Visit: {
            connect: {
              id: data['properties']['visitId'],
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
    throw new Error('Method not implemented.');
  }
  async RemoveVisit(data: UpdateDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.update({
        where: {
          id: data['id'],
        },
        data: {
          Visit: {
            disconnect: {
              id: data['properties']['visitId'],
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
    throw new Error('Method not implemented.');
  }
  async findByid(data: FindDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async findByTime(data: FindDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.findFirstOrThrow({
        where: {
          id: data['id'],
          time: data['properties']['time'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async findByStatus(data: FindDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.findFirstOrThrow({
        where: {
          id: data['id'],
          status: data['properties']['status'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async findByworkerProfileId(data: FindDto): Promise<Appointment> {
    try {
      let query = await this.db.appointment.findFirstOrThrow({
        where: {
          id: data['id'],
          workerProfileId: data['properties']['workerProfileId'],
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
  async UpdateProperty(
    data: UpdateDto,
  ): Promise<Appointment | BadRequestException> {
    try {
      let query =
        data['properties']['status'] !== undefined
          ? await this.db.appointment.update({
              where: {
                id: data['id'],
              },
              data: {
                status: data['properties']['status'],
              },
            })
          : data['properties']['time'] !== undefined
          ? await this.db.appointment.update({
              where: {
                id: data['id'],
              },
              data: {
                time: data['properties']['time'],
              },
            })
          : data['properties']['workerProfileId'] !== undefined
          ? await this.db.appointment.update({
              where: {
                id: data['id'],
              },
              data: {
                workerProfileId: data['properties']['workerProfileId'],
              },
            })
          : new BadRequestException('please pass in a valid property');
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, error);
    }
  }
}
