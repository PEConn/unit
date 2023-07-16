import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";
import DrinkPicker from "./components/DrinkPicker";

import { getTotalUnits, getUnits, getUnitsToday } from "./logic/drink";
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

  const total = getTotalUnits(drinks);
  const totalToday = getUnitsToday(drinks);

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
      <p>{roundTo(totalToday, 1)} units today. {roundTo(total, 1)} units in total.</p>

      {totalToday > 14 && <p className="warning">You have exceeded your weekly limit.</p> }

      {totalToday <= 14 && <p>Your progress towards this week's limit:</p> }

      {totalToday <= 14 &&<div className="sliderMinMax">
        <span>0</span>
        <span>14</span>
      </div> }

      {totalToday <= 14 &&<input
        className="percentage-slider slider-red"
        type="range"
        min="0"
        max="14"
        step="1"
        value={total}
        readOnly={true}
        /> }

      <button onClick={(e) => setDrinks([])}>Clear</button>

      <DrinkPicker addDrink={addDrink} />
    </>
  );
}
