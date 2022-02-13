import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";
import DrinkPicker from "./components/DrinkPicker";

import "./styles/styles.css";

export default function Home() {
  const [drinks, setDrinks] = useState([
    { id: 1, name: "Beer", amount: 568, displayAmount: "Pint", percentage: 4.1 },
    { id: 2, name: "Wine", amount: 125, displayAmount: "Small Glass", percentage: 10}
  ]);
  
  const total = Math.round(drinks
      .map(drink => drink.amount * drink.percentage)
      .reduce((a, b) => a + b, 0) / 100) / 10;
  
  return (
    <>
      {drinks && drinks.map((drink) => <Drink key={drink.id} drink={drink} />)}
      <p>{total} units in total.</p>
      
      <DrinkPicker />
    </>
  );
}
