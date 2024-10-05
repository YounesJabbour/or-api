const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  // Seed Clients
  const clients = [];
  for (let i = 0; i < 20; i++) {
    const client = await prisma.client.create({
      data: {
        Nom: faker.person.fullName(), // Updated from faker.name.fullName()
      },
    });
    clients.push(client);
  }

  // Seed Sites
  const sites = [];
  for (let i = 0; i < 20; i++) {
    const site = await prisma.site.create({
      data: {
        Nom: faker.company.name(), // Updated from faker.company.companyName()
      },
    });
    sites.push(site);
  }

  // Seed Vehicles
  const vehicles = [];
  for (let i = 0; i < 20; i++) {
    const vehicle = await prisma.vehicule.create({
      data: {
        Immatriculation: faker.vehicle.vin(),
        vehiclePlate: faker.vehicle.vrm(),
        chassisNumber: faker.vehicle.vin(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        Km: faker.number.int({ min: 5000, max: 200000 }), // Updated to use faker.number.int()
      },
    });
    vehicles.push(vehicle);
  }

  // Seed OrdresReparation
  for (let i = 0; i < 20; i++) {
    await prisma.ordreReparation.create({
      data: {
        Jobno: faker.number.int({ min: 1000, max: 9999 }), // Updated to use faker.number.int()
        DateOR: faker.date.past(),
        Departement: faker.commerce.department(),
        NomReceptionnaire: faker.person.firstName(), // Updated from faker.name.firstName()
        Commentaire: faker.lorem.sentence(),
        CodeInterne: faker.string.alphanumeric(8), // Updated from faker.random.alphaNumeric()
        Statut: faker.helpers.arrayElement([
          "en_cours",
          "en_attente",
          "cloture",
        ]),
        Montant: faker.number.float({ min: 100, max: 5000 }), // Updated to use faker.number.float()
        DateMaj: faker.date.recent(),
        Delai: faker.number.int({ min: 1, max: 30 }), // Updated to use faker.number.int()
        NumVeh: vehicles[i].id, // Foreign key relation to Vehicule
        NumClient: clients[i].id, // Foreign key relation to Client
        NumSite: sites[i].id, // Foreign key relation to Site
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
