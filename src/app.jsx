import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";
import DrinkPicker from "./components/DrinkPicker";

import { getUnits } from "./logic/drink";
import { roundTo } from "./logic/utils";

import "./styles/styles.css";

const DRINKS_KEY = "drinks";

export default function Home() {
  const [drinks, setDrinksRaw] = useState([
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
    const nextId = drinks.length === 0 ? 0 : (drinks[drinks.length - 1].id + 1);
    
    setDrinks([...drinks, { id: nextId, ...drink }]);
  };
  
  const removeDrink = (id) => {
    setDrinks(drinks.filter(drink => drink.id !== id))
  };
  
  return (
    <>
      <h3>Log</h3>
      {drinks && drinks.map((drink, i) => <Drink key={i} drink={drink} removeDrink={removeDrink} />)}
      {drinks.length == 0 && <p>Nothing added yet</p>}
      <p>{total} units in total.</p>
      <button onClick={(e) => setDrinks([])}>Clear</button>
      
      <DrinkPicker addDrink={addDrink} />
    </>
  );
}
