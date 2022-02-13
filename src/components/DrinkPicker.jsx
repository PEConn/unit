import React from 'react';

import RadioGroup from './RadioGroup';

export default function DrinkPicker() {
  const drinks = [ "Beer", "Wine", "Spirit" ];
  const amounts = [ "25ml", "50ml", "125ml", "250ml", "330ml", "Pint", "660ml" ];
  
  return (
    <div>
      <RadioGroup label="Drinks" entries={drinks} />
      <RadioGroup label="Amounts" entries={amounts} />
    </div>
  )
}