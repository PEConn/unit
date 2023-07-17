export function roundTo(number: number, decimalPlaces: number): number {
  const power = 10 ** decimalPlaces;
  return Math.round(number * power) / power;
}

export function getFormattedDate(): string {
  return new Date().toLocaleString('en-GB', {  weekday: 'short', month: 'short', day: 'numeric' });
}