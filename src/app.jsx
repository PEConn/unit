import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";
import DrinkPicker from "./components/DrinkPicker";

import { getUnits } from "./logic/drink";
import { roundTo } from "./logic/utils";

import "./styles/styles.css";

const DRINKS_KEY = "drinks";

export default function Home() {
  const [drinks, setDrinks] = useState([
    { name: "Beer", amount: "Pint", percentage: 4.1 },
    { name: "Wine", amount: "125ml", percentage: 10 }
  ]);
  
  const storage = window.localStorage;
  
  useEffect(() => {
    const savedDrinks = storage.getItem(DRINKS_KEY);
    if (!savedDrinks) return;
    
    const parsed = 
  }, []);
  
  const total = roundTo(drinks.reduce((acc, drink) => acc + getUnits(drink), 0), 1);
  
  const addDrink = (drink) => {
    setDrinks(current => [...current, drink]);
  };
  
  return (
    <>
      {drinks && drinks.map((drink, i) => <Drink key={i} drink={drink} />)}
      <p>{total} units in total.</p>
      <button onClick={(e) => setDrinks([])}>Clear</button>
      
      <DrinkPicker addDrink={addDrink} />
    </>
  );
}
