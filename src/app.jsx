import React, { useState, useEffect } from "react";

import Drink from "./components/Drink";

import "./styles/styles.css";

export default function Home() {
  const [drinks, setDrinks] = useState([
    { id: 1, name: "Beer", amount: "pint", percentage: 4.1 },
    { id: 2, name: "Wine", amount: 125, percentage: 10}
  ]);
  
  return (
    <>
      {drinks && drinks.map((drink) => <Drink key={drink.id} drink={drink} />)}
    </>
  );
}
