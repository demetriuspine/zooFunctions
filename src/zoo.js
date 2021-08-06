const { species, employees, prices } = require('./data');
const data = require('./data');

const getSpeciesByIds = (...ids) => species.filter((animal, index) => animal.id === ids[index]);

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((person) => person.firstName === employeeName || person
    .lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(managerId) {
  return employees.map((person) => person.managers).some((id) => id.includes(managerId));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(Species) {
  if (!Species) {
    return species.reduce((accumulator, { name, residents }) => (
      { ...accumulator, [name]: residents.length }), {});
  }
  return species.find((animal) => animal.name === Species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  let total = 0;
  const entrantsKeys = Object.keys(entrants);
  entrantsKeys.forEach((entrantsKey) => {
    total += entrants[entrantsKey] * prices[entrantsKey];
  });
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
