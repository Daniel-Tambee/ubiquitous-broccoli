import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { LolGovService } from './lol_gov.service';
import { StatisticsService } from '../statistics/statistics.service';

@Controller('lol-gov')
export class LolGovController {
    /**
     *
     */
    constructor(private readonly lcl: LolGovService, private readonly stats:StatisticsService) { }
    @Get("getAllLocalGov")
    async getAllLocalGov() {
        try {
            return this.lcl.getAllLocalGov();
        } catch (error) {
            throw new BadRequestException(undefined)
        }
    }

    @Get('getFarmersByLocalGovernment')
    async getFarmersByLocalGovernment(@Query('id') id: string) {
        try {
            return this.lcl.getFarmersByLocalGovernment(id);

        } catch (error) {

        }
    }

    @Get('getStatistics')
    async getStatistics() {
        return  await this.stats.getStatisticsForAllLocalGovernments();
    }
}
