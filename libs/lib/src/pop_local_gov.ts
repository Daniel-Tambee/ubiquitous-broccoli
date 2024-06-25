import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

  const localGovernments = [
    { name: "Demsa" },
    { name: "Fufore" },
    { name: "Ganye" },
    { name: "Girei" },
    { name: "Gombi" },
    { name: "Guyuk" },
    { name: "Hong" },
    { name: "Jada" },
    { name: "Lamurde" },
    { name: "Madagali" },
    { name: "Maiha" },
    { name: "Mayo-Belwa" },
    { name: "Michika" },
    { name: "Mubi North" },
    { name: "Mubi South" },
    { name: "Numan" },
    { name: "Shelleng" },
    { name: "Song" },
    { name: "Toungo" },
    { name: "Yola North" },
    { name: "Yola South" },
  ];

  try {
    for (const localGovernment of localGovernments) {
      await prisma.localGovernment.create({
        data: localGovernment,
      });
    }
    console.log('Local governments added successfully.');
  } catch (e) {
    console.error('Error adding local governments:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
