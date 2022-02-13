import React from "react";

export default function RadioGroup({ label, entries }) {
  return (
    <>
      <p>{label}</p>
      {entries.map(entry => (
          <label className="radio" key={entry}>
            <input
              type="radio"
              name={label}
              value={entry} />
            {entry}
          </label>
        )
      )}
    </>
  );
}