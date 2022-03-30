const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday') {
    return 10;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 4;
  } else if (day === 'sunday') {
    return 9;
  }
};
// this function adds up all hours and multiples them by 7(for each day)
const getActualSleepHours = () =>
getSleepHours('monday') +
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');

const getIdealSleepHours = hours => {
  return hours * 7;
};
// this function takes both functions and compares them
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep!';
} else if (actualSleepHours > idealSleepHours) {
    return 'You got too much sleep!';
} else {
    return 'You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep!'
  }
};
