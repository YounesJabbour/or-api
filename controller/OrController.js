prisma = require("../prisma");
const express = require("express");
const router = express.Router();

const createOrdreReparation = async (req, res) => {
  const data = req.body;
  const OrdreReparation = await prisma.OrdreReparation.createMany({
    data: data,
  });

  res.json(OrdreReparation);
};

const listOrdreReparation = async (req, res) => {
  const OrdreReparation = await prisma.OrdreReparation.findMany();
  const ordresReparationFormatted = OrdreReparation.map((ordre) => ({
    ...ordre,
    NumClient: ordre.NumClient.toString(), // Convert BigInt to string
    NumSite: ordre.NumSite.toString(), // Convert BigInt to string
    NumVeh: ordre.NumVeh.toString(), // Convert BigInt to string
    Montant: ordre.Montant !== null ? parseFloat(ordre.Montant) : null, // Convert BigInt to number or leave as null
    // DateOR: ordre.DateOR.toISOString().split("T")[0], // Convert Date to string
  }));
  res.json(ordresReparationFormatted);
};

const getOrdreReparation = async (req, res) => {
  const OrdreReparation = await prisma.OrdreReparation.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(OrdreReparation);
};

module.exports = {
  createOrdreReparation,
  listOrdreReparation,
  getOrdreReparation,
};
