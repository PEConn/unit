// { id: 1, name: "Beer", amount: "125ml", percentage: 4.1 }

import { getFormattedDate, roundTo } from "./utils";

export function makeDrink(id, name, amount, percentage, date) {
  return {
    id: id,
    name: name,
    amount: amount,
    percentage: percentage,
    date: date
  };
}

export function getAmountInMl(drink) {
  const amount = drink.amount;

  if (amount.endsWith("ml")) {
    return parseInt(amount.substring(0, amount.length - 2));
  }

  if (amount == "Pint") {
    return 568;
  }

  if (amount == "Half Pint") {
    return 568 / 2;
  }

  return 0;
}

export function getUnits(drink) {
  const amount = getAmountInMl(drink);
  const units = (drink.percentage * amount) / 1000;
  return roundTo(units, 1);
}

export function getTotalUnits(drinks) {
  return drinks.reduce((acc, drink) => acc + getUnits(drink), 0);
}

export function getUnitsToday(drinks) {
  const today = getFormattedDate();

  return getTotalUnits(drinks.filter((d) => d.date == today));
}