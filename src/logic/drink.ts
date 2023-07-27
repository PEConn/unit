// { id: 1, name: "Beer", amount: "125ml", percentage: 4.1 }

import { getFormattedDate, roundTo } from "./utils";

interface Drink {
  id: number,  // eg: 1
  name: string,  // eg: "Beer"
  amount: string,  // eg: "125.ml"
  percentage: number,  // eg: 4.1
  date: string,  // eg: "Thu, 17 Aug"
}

interface DrinkWithoutId {
  name: string,
  amount: string,
  percentage: number,
  date: string,
}

export function makeDrink(id: number, name: string, amount: string, percentage: number, date: string): Drink {
  return {
    id: id,
    name: name,
    amount: amount,
    percentage: percentage,
    date: date
  };
}

const SHOT_AMOUNTS = [
  "25ml", "50ml", "100ml"
]
const WINE_AMOUNTS = [
  "125ml", "175ml", "250ml", "375ml", "500ml", "750ml"
]
const BEER_AMOUNTS = [
  "330ml", "440ml", "660ml",
  "1/3 Pint", "1/2 Pint", "2/3 Pint", "Pint"
]

export const DRINK_TYPES: Map<string, Array<string>> = new Map();
DRINK_TYPES.set('Beer', BEER_AMOUNTS);
DRINK_TYPES.set('Wine', WINE_AMOUNTS);
DRINK_TYPES.set('Spirit', SHOT_AMOUNTS);
DRINK_TYPES.set('Liqueur', SHOT_AMOUNTS);
DRINK_TYPES.set('Low %', BEER_AMOUNTS);
DRINK_TYPES.set('Strong Beer', BEER_AMOUNTS);

export function getAmountInMl(drink: Drink): number {
  const amount = drink.amount;

  if (amount.endsWith("ml")) {
    return parseInt(amount.substring(0, amount.length - 2));
  }

  if (amount == "Pint")     return 568;
  if (amount == "2/3 Pint") return 568 * 2 / 3;
  if (amount == "1/2 Pint") return 568 / 2;
  if (amount == "1/3 Pint") return 568 / 3;

  return 0;
}

export function getUnits(drink: Drink) {
  const amount = getAmountInMl(drink);
  const units = (drink.percentage * amount) / 1000;
  return roundTo(units, 1);
}

export function getTotalUnits(drinks: Drink[]) {
  return drinks.reduce((acc, drink) => acc + getUnits(drink), 0);
}

export function getUnitsToday(drinks: Drink[]) {
  const today = getFormattedDate();

  return getTotalUnits(drinks.filter((d) => d.date == today));
}