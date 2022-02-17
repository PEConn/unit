import React from "react";

import { getUnits } from "../logic/drink";

export default function Drink({ drink }) {
  const units = getUnits(drink);
  
  return (
    <div>
      {drink.day}: {drink.amount} of {drink.percentage}% <b>{drink.name}</b>, {units} units.
    </div>
  )
}