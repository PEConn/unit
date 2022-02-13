import React from 'react';

export default function DrinkPicker() {
  const drinks = [ "Beer", "Wine", "Spirit" ];
  
  return (
    <div>
      <p>Drink:</p>
      {drinks.map(drink => {
        return (
          <label key={drink}>
            <input
              type="radio"
              name="drink"
              value={drink} />
            {drink}
          </label>
        )
      })}
      <label><input type="radio" name="drink" value="beer" checked />Beer</label><br />
      <label><input type="radio" name="drink" value="wine" />Wine</label><br />
      <label><input type="radio" name="drink" value="spirit" />Spirit</label><br />
      
      <p>Amount:</p>
      <label></label>
    </div>
  )
}