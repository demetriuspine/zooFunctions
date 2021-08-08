const { species, employees, prices, hours } = require('./data');
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
  const hoursKeys = Object.keys(hours);
  const hoursObjetcs = Object.values(hours);
  const scheduleObject = hoursKeys.reduce((accumulator, curVal, ind) => {
    if (hoursObjetcs[ind].open === 0) {
      return { ...accumulator, [curVal]: 'CLOSED' };
    }
    return { ...accumulator,
      [curVal]: `Open from ${hoursObjetcs[ind].open}am until ${hoursObjetcs[ind].close - 12}pm`,
    };
  }, {});
  if (!dayName) {
    return scheduleObject;
  }
  return { [dayName]: scheduleObject[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeeSearch = employees.find((person) => person.id === id);
  const firstAnimals = species.find((animal) => animal.id === employeeSearch.responsibleFor[0]);
  const sortedAnimals = firstAnimals.residents.sort((lValue, rValue) => rValue.age - lValue.age);
  return Object.values(sortedAnimals[0]);
}

function increasePrices(percentage) {
  const increase = 1 + (percentage / 100);
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach((element) => {
    prices[element] = parseFloat((Math.round((prices[element] * increase) * 100) / 100).toFixed(2));// https://living-sun.com/pt/javascript/360678-javascript-parsefloat-force-2-decimals-as-number-javascript.html and https://www.alura.com.br/artigos/formatando-numeros-no-javascript?gclid=CjwKCAjwgb6IBhAREiwAgMYKRvOMbZgcE2Cjiey3lqd5AifJybCJituoS9wuu7teUuHxdFchRjHCxBoCQtgQAvD_BwE
  });
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
