import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";
import DrinkPicker from "./components/DrinkPicker";

import { getUnits } from "./logic/drink";
import { roundTo } from "./logic/utils";

import "./styles/styles.css";

const DRINKS_KEY = "drinks";

export default function Home() {
  const [drinks, setDrinksRaw] = useState([
    { name: "Beer", amount: "Pint", percentage: 4.1 },
    { name: "Wine", amount: "125ml", percentage: 10 }
  ]);
  
  const storage = window.localStorage;
  
  const setDrinks = (d) => {
    console.log(d);
    storage.setItem(DRINKS_KEY, JSON.stringify(d));
    setDrinksRaw(d);
  }
  
  useEffect(() => {
    const savedDrinks = storage.getItem(DRINKS_KEY);
    if (!savedDrinks) return;
    
    try {
      const parsed = JSON.parse(savedDrinks);
      setDrinksRaw(parsed);
    } catch(e) {
      console.log(e);
    }
  }, []);
  
  const total = roundTo(drinks.reduce((acc, drink) => acc + getUnits(drink), 0), 1);
  
  const addDrink = (drink) => {
    setDrinks([...drinks, drink]);
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
