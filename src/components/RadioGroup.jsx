import React from "react";

export default function RadioGroup({ label, entries }) {
  return (
    <>
      <h3>{label}:</h3>
      <div className="radio-group">
        {entries.map(entry => (
            <label className="radio" key={entry}>
              <input
                type="radio"
                name={label}
                value={entry} />
              <span>{entry}</span>
            </label>
          )
        )}
      </div>
    </>
  );
}