const express = require('express');

const {
  getAllPackages, addPackage, updatePackage, deletePackage, getPackageById,
} = require('../../controllers/Packages');

const packages = express.Router();

packages.get('/', getAllPackages);
packages.post('/', addPackage);
packages.put('/:id', updatePackage);
packages.delete('/:id', deletePackage);
packages.get('/:id', getPackageById);

module.exports = packages;
