import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

import "./styles/styles.css";

export default function Home() {
  const [drinks, setDrinks] = useState([
    { id: 1, name: 'Beer', amount: 'pint', percentage: 4.1 }
  ]);
  
  return (
    <>
      <ul>
        {drinks && drinks.map(drink => <li key={drink.id}>{drink.name}</li>)}
      </ul>
    </>
  );
}
