import React, { useState } from 'react';

import RadioGroup from './RadioGroup';

export default function DrinkPicker({ addDrink }) {
  const drinks = [ "Beer", "Wine", "Spirit" ];
  const amounts = [ "25ml", "50ml", "125ml", "250ml", "Half Pint", "330ml", "Pint", "660ml" ];
  
  const [drink, setDrink] = useState(drinks[0]);
  const [amount, setAmount] = useState(amounts[6]);
  const [percentage, setPercentage] = useState(4.0);
  
  const onSubmit = (e) => {
    addDrink({
      name: drink,
      amount: amount,
      percentage: percentage
    });
  }
  
  return (
    <div>
      <RadioGroup label="Drinks" entries={drinks} currentEntry={drink} setEntry={setDrink} />
      <RadioGroup label="Amounts" entries={amounts} currentEntry={amount} setEntry={setAmount} />
      
      <input
        className="percentage-input"
        type="number"
        min="0"
        max="100"
        step="0.5"
        value={percentage}
        onChange={e => setPercentage(e.currentTarget.value)}
        /><br />
      
      <button onClick={onSubmit}>Add {amount} of {percentage}% {drink}</button>
    </div>
  )
}