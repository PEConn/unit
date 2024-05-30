import React, { useEffect, useState } from 'react';

import RadioGroup from './RadioGroup';
import { getFormattedDate } from '../logic/utils';
import { DRINK_TYPES } from '../logic/drink';

export default function DrinkPicker({ addDrink }) {
  const drinks = Array.from(DRINK_TYPES.keys());
  const [drink, setDrink] = useState(drinks[0]);

  const amounts = DRINK_TYPES.get(drink);
  const [amount, setAmount] = useState(amounts[amounts.length - 1]);

  useEffect(() => {
    // TODO: Push info into a "DrinkType" class - eg, what the default amount
    // should be, along with the slider steps below.
    if (drink === "Beer" || drink == "Low %" || drink == 'Strong Beer') {
      setAmount("Pint");
    } else if (drink === "Wine") {
      setAmount("125ml");
    } else {
      setAmount("50ml");
    }
  }, [drink]);

  const [percentage, setPercentage] = useState(4.0);

  const onSubmit = (e) => {
    const date = getFormattedDate();

    addDrink({
      name: drink,
      amount: amount,
      percentage: percentage,
      date: date
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
    sliderMin = 10;
    sliderMax = 30;
    sliderStep = 1;
  } else if (drink === "Low %") {
    sliderMin = 0;
    sliderMax = 3;
    sliderStep = 0.1;
  } else if (drink === "Strong Beer") {
    sliderMin = 7;
    sliderMax = 15;
    sliderStep = 0.1;
  }


  useEffect(() => {
    setPercentage((sliderMin + sliderMax) / 2);
  }, [drink])

  return (
    <div>
      <RadioGroup label="Drinks" entries={drinks} currentEntry={drink} setEntry={setDrink} />
      <RadioGroup label="Amounts" entries={amounts} currentEntry={amount} setEntry={setAmount} />

      <h3>Percentage</h3>
      <input
        data-testid="percentage-input"
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

      <p>Remembered to drink some water!</p>

      <button
      data-testid="add-drink"
        popovertarget="drink-reminder-popover"
        className="add-drink"
        onClick={onSubmit}>
          Add {amount} of {percentage}% {drink}
      </button>
    </div>
  )
}