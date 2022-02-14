export function roundTo(number, decimalPlaces) {
  const power = 10 ** decimalPlaces;
  return Math.round(number * power) / power;
}