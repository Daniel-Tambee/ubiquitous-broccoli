const prisma = require('./prismaClient');

export async function calculateGrowth() {
  try {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Count farmers at the start of the current month
    const currentCount = await prisma.farmerProfile.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    });

    // Count farmers at the start of the previous month
    const previousCount = await prisma.farmerProfile.count({
      where: {
        createdAt: {
          gte: lastMonth,
          lt: startOfMonth,
        },
      },
    });

    // Calculate percentage growth
    const growth = ((currentCount - previousCount) / previousCount) * 100;

    console.log(`Percentage Growth: ${growth.toFixed(2)}%`);
  } catch (error) {
    console.error('Error calculating growth:', error);
  } finally {
    await prisma.$disconnect();
  }
}

