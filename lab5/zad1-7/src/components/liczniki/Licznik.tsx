import { useState } from "react";

const Licznik = () => {
  const [liczba, setLiczba] = useState(0);

  const dodaj = () => {
    setLiczba(liczba + 1);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 2.1 - Licznik</h3>
      <div>Stan licznika: {liczba}</div>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
