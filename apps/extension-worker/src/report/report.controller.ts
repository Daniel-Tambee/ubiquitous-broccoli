import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('report')
@ApiTags('report')
export class ReportController {}
