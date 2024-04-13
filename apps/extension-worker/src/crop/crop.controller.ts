import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('crop')
@ApiTags('crop')
export class CropController {}
