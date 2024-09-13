import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('statistics')
@ApiTags('statistics')
export class StatisticsController {
    /**
     *
     */
    constructor(private readonly stat:StatisticsService) {
        
    }

    @Get("getStatistics")
    async getStatistics() {
        return  await this.stat.getStatisticsForAllLocalGovernments();
    }
}
