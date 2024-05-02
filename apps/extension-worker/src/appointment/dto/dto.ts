import { Appointment, Intervention } from '@prisma/client';

type excluded = 'id' | 'createdAt' | 'updatedAt';

export type CreateAppointmentDto = Partial<Omit<Appointment, excluded>>;
