prisma = require("../db");
const express = require("express");
const router = express.Router();

const createVehicule = async (req, res) => {
  const data = req.body;
  const Vehicule = await prisma.Vehicule.createMany({
    data: data,
  });

  res.json(Vehicule);
};

const listVehicule = async (req, res) => {
  const Vehicule = await prisma.Vehicule.findMany();
  res.json(Vehicule);
};

const getVehicule = async (req, res) => {
  const Vehicule = await prisma.Vehicule.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(Vehicule);
};

module.exports = {
  createVehicule,
  listVehicule,
  getVehicule,
};
