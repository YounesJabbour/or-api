prisma = require("../db");

const createSite = async (req, res) => {
  const data = req.body;
  const Sites = await prisma.Site.createMany({
    data: data,
  });

  res.json(Sites);
};

const listSite = async (req, res) => {
  const Sites = await prisma.Site.findMany();
  res.json(Sites);
};

const getSite = async (req, res) => {
  const Site = await prisma.Site.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(Site);
};

module.exports = {
  createSite,
  listSite,
  getSite,
};
