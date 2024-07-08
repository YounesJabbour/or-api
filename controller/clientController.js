prisma = require("../prisma");

const createClient = async (req, res) => {
  const data = req.body;
  const client = await prisma.client.createMany({
    data: data,
  });

  res.json(client);
};

const listClient = async (req, res) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
};

const getClient = async (req, res) => {
  const client = await prisma.client.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(client);
};

module.exports = {
  createClient,
  listClient,
  getClient,
};
