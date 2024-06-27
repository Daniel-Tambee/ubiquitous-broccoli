import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { LolGovService } from './lol_gov.service';

@Controller('lol-gov')
export class LolGovController {
    /**
     *
     */
    constructor(private readonly lcl: LolGovService) { }
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
}
