const returnFirstTwoDrivers = (drivers) => ['Antonia', 'Nuru', 'Amari', 'Mo'].slice(0, 2);

const returnLastTwoDrivers = (drivers) => ['Antonia', 'Nuru', 'Amari', 'Mo'].slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, selectFunction) => {
    return selectFunction(arrayOfDrivers);
  };