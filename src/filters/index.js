// function that takes a string and returns new strings split by a period
export function splitByPeriod(value) {
  if (!value) return value;
  return value.split('.');
}

// function that takes a string and returns new strings split by every second period
export function splitByPeriod2(value) {
  if (!value) return value;
  return value.split('.').join('');
}