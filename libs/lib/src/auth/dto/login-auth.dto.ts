import { UserType } from '@prisma/client';

export class ValidationDto {
  email: string;
  password: string;
  type: UserType;
}
