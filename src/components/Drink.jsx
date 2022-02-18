import React from "react";

import { getUnits } from "../logic/drink";

export default function Drink({ drink, removeDrink }) {
  const units = getUnits(drink);
  
  return (
    <div>
      {drink.day}: {drink.amount} of {drink.percentage}% <b>{drink.name}</b>, {units} units.
      <span style={{ color: "grey" }} onClick={() => removeDrink(drink.id)}>(delete)</span>
    </div>
  )
}