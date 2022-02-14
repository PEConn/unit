// { id: 1, name: "Beer", amount: 568, displayAmount: "Pint", percentage: 4.1 }

export function getAmountInMl(drink) {
  const amount = drink.amount;
  
  if (amount.endsWith("ml")) {
    console.log(amount.substring(0, drink.length - 2));
    return parseInt(amount.substring(0, drink.length - 2));
  }
  
  if (amount == "Pint") {
    return 568;
  }
  
  return 0;
}

export function getUnits(drink) {
  const amount = getAmountInMl(drink);
  const units = Math.round((drink.percentage * amount) / 100) / 10;
  return units;
}