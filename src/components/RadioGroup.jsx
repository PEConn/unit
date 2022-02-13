import React from "react";

export default function RadioGroup({ entries }) {
  return (
    <>
      <
    </>
  );
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
}