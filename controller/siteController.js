prisma = require("../db");

const createSite = async (req, res) => {
  const data = req.body;
  const Sites = await prisma.Site.createMany({
    data: data,
  });

  res.json(Sites);
};

const deleteSite = async (req, res) => {
  const Site = await prisma.Site.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.status(200).json(Site);
};

const listSite = async (req, res) => {
  const Sites = await prisma.Site.findMany();
  res.json(Sites);
};

const getSite = async (req, res) => {
  const Site = await prisma.Site.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(Site);
};

module.exports = {
  createSite,
  listSite,
  getSite,
  deleteSite,
};
