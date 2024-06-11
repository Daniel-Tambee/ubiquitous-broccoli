import { BadRequestException } from '@nestjs/common';
import { DbService } from './db/db.service';

const prisma = new DbService();

export async function calculateGrowth() {
  try {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Count farmers at the start of the current month
    const currentCount = await prisma.project.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });

    // Count farmers at the start of the previous month
    const previousCount = await prisma.project.count({
      where: {
        createdAt: {
          gte: lastMonth,
          lt: startOfMonth,
        },
      },
    });

    let growth: number;
    if (previousCount === 0) {
      growth = currentCount > 0 ? 100 : 0; // If no farmers in the previous period, growth is either 100% or 0%
    } else {
      growth = ((currentCount - previousCount) / previousCount) * 100;
    }

    // Calculate percentage growth
    // const growth1 = ((currentCount - previousCount) / previousCount) * 100;
    // const growth = '${growth.toFixed(2)}%';
    // console.log(`Percentage Growth: ${growth.fixed()}%`);
    return growth.toFixed(2) + '%';
  } catch (error) {
    console.error('Error calculating growth:', error);
    throw new BadRequestException(undefined, error);
  } finally {
    await prisma.$disconnect();
  }
}
