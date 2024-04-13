import { Crop } from '@prisma/client';

export interface ICrop {
  CreateCrop(): Promise<Crop>;
  FindByid(): Promise<Crop>;
  FindBytype(): Promise<Crop>;
  UpdateProperty(): Promise<Crop>;
}
