export function roundTo(number, decimalPlaces) {
  const power = 10 ** decimalPlaces;
  return Math.round(number * power) / power;
}

export function getFormattedDate() {
  return new Date().toLocaleString('en-GB', {  weekday: 'short', month: 'short', day: 'numeric' });
}