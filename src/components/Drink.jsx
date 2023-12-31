import React from "react";

import { getUnits } from "../logic/drink";

export default function Drink({ drink, removeDrink }) {
  const units = getUnits(drink);

  return (
    <div>
      {drink.date}: {drink.amount} of {drink.percentage}% <b>{drink.name}</b>, {units} units.&nbsp;
      <span style={{ color: "grey" }} onClick={() => removeDrink(drink.id)}>🗑️</span>
    </div>
  )
}