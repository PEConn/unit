import React from "react";

export default function Drink({ drink }) {
  const amount = drink.amount == "pint" ? "pint" : drink.amount + "ml";
  
  
  return (
    <div>
      {amount} of <b>{drink.name}</b>
    </div>
  )
}