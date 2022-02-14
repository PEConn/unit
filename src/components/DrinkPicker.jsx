import React, { useState } from 'react';

import RadioGroup from './RadioGroup';

export default function DrinkPicker() {
  const drinks = [ "Beer", "Wine", "Spirit" ];
  const amounts = [ "25ml", "50ml", "125ml", "250ml", "330ml", "Pint", "660ml" ];
  
  const [drink, setDrink] = useState(drinks[0]);
  const [amount, setAmount] = useState(amounts[5]);
  const [percentage, setPercentage] = useState(4.0);
  
  return (
    <div>
      <RadioGroup label="Drinks" entries={drinks} currentEntry={drink} setEntry={setDrink} />
      <RadioGroup label="Amounts" entries={amounts} currentEntry={amount} setEntry={setAmount} />
      
      <input
        type="number"
        min="0"
        max="100"
        step="0.5"
        value={percentage}
        onChange={e => setPercentage(e.currentTarget.value)}
        /><br />
      
      Add {amount} of {percentage}% {drink}?
    </div>
  )
}