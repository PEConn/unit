import React, { useState } from 'react';

import RadioGroup from './RadioGroup';

export default function DrinkPicker({ addDrink }) {
  const drinks = [ "Beer", "Wine", "Spirit", "Liqueur", "Low %" ];
  const amounts = [ "25ml", "50ml", "125ml", "250ml", "Half Pint", "330ml", "Pint", "660ml" ];
  
  const [drink, setDrink] = useState(drinks[0]);
  const [amount, setAmount] = useState(amounts[6]);
  const [percentage, setPercentage] = useState(4.0);
  
  const onSubmit = (e) => {
    const day = new Date().toLocaleString('en-us', {  weekday: 'short' });
    
    addDrink({
      name: drink,
      amount: amount,
      percentage: percentage,
      day: day
    });
  }
  
  let sliderMin = 0;
  let sliderMax = 100;
  let sliderStep = 1;
  
  if (drink === "Beer") {
    sliderMin = 3;
    sliderMax = 7;
    sliderStep = 0.1;
  } else if (drink === "Wine") {
    sliderMin = 8;
    sliderMax = 16;
    sliderStep = 0.5;
  } else if (drink === "Spirit") {
    sliderMin = 10;
    sliderMax = 50;
    sliderStep = 1;
  } else if (drink === "Liqueur") {
    sliderMin = 8;
    sliderMax = 20;
    sliderStep = 1;
  } else if (drink === "Low %") {
    sliderMin = 0;
    sliderMax = 3;
    sliderStep = 0.5;
  }
  
  return (
    <div>
      <RadioGroup label="Drinks" entries={drinks} currentEntry={drink} setEntry={setDrink} />
      <RadioGroup label="Amounts" entries={amounts} currentEntry={amount} setEntry={setAmount} />
      
      <h3>Percentage</h3>
      <input
        className="percentage-input"
        type="number"
        min="0"
        max="100"
        step="0.5"
        value={percentage}
        onChange={e => setPercentage(e.currentTarget.value)}
        />
      
      <div className="sliderMinMax">
        <span>{sliderMin}</span>
        <span>{sliderMax}</span>
      </div>
      <input
        className="percentage-slider"
        type="range"
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={percentage}
        onChange={e => setPercentage(e.currentTarget.value)}
        />
      
      <button className="add-drink" onClick={onSubmit}>Add {amount} of {percentage}% {drink}</button>
    </div>
  )
}