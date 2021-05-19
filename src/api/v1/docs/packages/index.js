const addPackage = require('./addPackage');
const getAllPackages = require('./getAllPackages');
const deletePackage = require('./deletePackage');
const getPackageById = require('./getPackageById');
const updatePackage = require('./updatePackage');

module.exports = {
  '/packages': {
    ...addPackage,
    ...getAllPackages,
  },
  '/packages/{id}': {
    ...deletePackage,
    ...getPackageById,
    ...updatePackage,
  },
};
