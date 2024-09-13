import { DbService } from '@app/lib/db/db.service';
import { Injectable } from '@nestjs/common';
import { ProjectType } from '@prisma/client';

@Injectable()
export class StatisticsService {
    /**
     *
     */
    constructor(private readonly db: DbService) {

    }


    private async getAllLocalGovernmentIds() {
        try {
            const localGovernments = await this.db.localGovernment.findMany({
                select: {
                    id: true,
                    name: true, // Optionally include the name for logging purposes
                },
            });

            return localGovernments; // Return array of Local Government IDs
        } catch (error) {
            console.error("Error fetching Local Governments:", error);
            throw error;
        }
    }

    private async countFarmersByLgaId(lgaId: string) {
        const projectTypes: ProjectType[] = ['LIVESTOCK', 'CROP'];

        return await this.db.project.count({
            where: {
                type: {
                    in: projectTypes,
                },
                participants: {
                    some: {},
                },
                lga: {
                    id: lgaId,
                },
            },
        });
    }

    private async countCooperativesByLgaId(lgaId: string) {
        const projectTypes: ProjectType[] = ['LIVESTOCK', 'CROP'];

        return await this.db.project.count({
            where: {
                type: {
                    in: projectTypes,
                },
                Cooperative: {
                    isNot: null,
                },
                lga: {
                    id: lgaId,
                },
            },
        });
    }

    async  getStatisticsForAllLocalGovernments() {
        try {
          const localGovernments = await this.getAllLocalGovernmentIds();
          const statistics = [];
      
          for (const lga of localGovernments) {
            // Count farmers, cooperatives, and projects for livestock
            const farmersCountLivestock = await this.countFarmersByLgaAndType(lga.id, 'LIVESTOCK');
            const cooperativesCountLivestock = await this.countCooperativesByLgaAndType(lga.id, 'LIVESTOCK');
            const projectsCountLivestock = await this.countProjectsByLgaAndType(lga.id, 'LIVESTOCK');
      
            // Count farmers, cooperatives, and projects for crop
            const farmersCountCrop = await this.countFarmersByLgaAndType(lga.id, 'CROP');
            const cooperativesCountCrop = await this.countCooperativesByLgaAndType(lga.id, 'CROP');
            const projectsCountCrop = await this.countProjectsByLgaAndType(lga.id, 'CROP');
      
            // Add the result for each LGA to the statistics array
            statistics.push({
              lgaId: lga.id,
              lgaName: lga.name,
              farmersCountLivestock: farmersCountLivestock,
              farmersCountCrop: farmersCountCrop,
              cooperativesCountLivestock: cooperativesCountLivestock,
              cooperativesCountCrop: cooperativesCountCrop,
              projectsCountLivestock: projectsCountLivestock,
              projectsCountCrop: projectsCountCrop,
            });
          }
      
          return statistics; // Return the array containing all results
        } catch (error) {
          console.error("Error fetching statistics for LGAs:", error);
          throw error;
        }
      }      
      
      private async  countFarmersByLgaAndType(lgaId: string, projectType: ProjectType) {
        return await this.db.project.count({
          where: {
            type: projectType,
            participants: {
              some: {}, // Ensure the project has participants (Farmers)
            },
            lga: {
              id: lgaId, // Filter by Local Government ID
            },
          },
        });
      }
    
    private  async  countCooperativesByLgaAndType(lgaId: string, projectType: ProjectType) {
        return await this.db.project.count({
          where: {
            type: projectType,
            Cooperative: {
              isNot: null, // Ensure the project has a Cooperative
            },
            lga: {
              id: lgaId, // Filter by Local Government ID
            },
          },
        });
      }

      async  getProjectsByLgaAndType(lgaId: string, projectType: ProjectType) {
        return await this.db.project.findMany({
          where: {
            type: projectType,
            lga: {
              id: lgaId, // Filter by Local Government ID
            },
          },
          select: {
            id: true,
            name: true,
            description: true,
            start_date: true,
            end_date: true,
          },
        });
      }
  async  countProjectsByLgaAndType(lgaId: string, projectType: ProjectType) {
    return await this.db.project.count({
      where: {
        type: projectType,
        lga: {
          id: lgaId, // Filter by Local Government ID
        },
      },
    });
  }

  
}
