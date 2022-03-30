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
// This adds up all the hours of the week using a concise body form
const getActualSleepHours = () =>
getSleepHours('monday') +
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');
