import React from "react";

export default function Drink({ drink }) {
  const units = Math.round((drink.percentage * drink.amount) / 100) / 10;
  
  return (
    <div>
      {drink.displayAmount} of {drink.percentage}% <b>{drink.name}</b>, {units} units.
    </div>
  )
}