import { useState, useEffect } from "react";

const Licznik = () => {
  const [liczba, setLiczba] = useState(0);

  const dodaj = () => {
    setLiczba(liczba + 1);
  };

  useEffect(() => {
    console.log("Hello world");
  }, []);

  // Efekt wywoływany za każdym razem, gdy zmieni się zmienna 'liczba'
  useEffect(() => {
    console.log(`Licznik zwiększył się do ${liczba}`);
  }, [liczba]);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 6.1 - Licznik z efektem</h3>
      <div>Stan licznika: {liczba}</div>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
