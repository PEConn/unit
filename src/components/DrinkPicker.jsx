import React from 'react';

export default function DrinkPicker() {
  return (
    <div>
      <p>Drink:</p>
      <label><input type="radio" name="drink" value="beer" checked />Beer</label><br />
      <label><input type="radio" name="drink" value="wine" />Wine</label><br />
      <label><input type="radio" name="drink" value="spirit" />Spirit</label><br />
    </div>
  )
}