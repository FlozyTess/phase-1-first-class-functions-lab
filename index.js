//returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
console.log (returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))
//returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//createFareMultiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}
const fareDoubler = createFareMultiplier(2); 
console.log(fareDoubler(10)); 

const fareTripler = createFareMultiplier(3); 
console.log(fareTripler(10))
//selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverFunction) {
  return driverFunction(drivers)
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']
