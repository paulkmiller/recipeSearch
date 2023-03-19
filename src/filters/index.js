// function that takes a string and returns new strings split by a period
export function splitByPeriod(value) {
  if (!value) return value;
  return value.split('.');
}