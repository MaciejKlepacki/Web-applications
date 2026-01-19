import { useState, useEffect } from "react";

const Licznik8 = () => {
  // Inicjalizacja stanu funkcją - sprawdza localStorage przy starcie
  const [liczba, setLiczba] = useState(() => {
    const saved = localStorage.getItem("stan-licznika");
    return saved ? parseInt(saved) : 0;
  });

  // Efekt: zapisuje do localStorage przy każdej zmianie 'liczba'
  useEffect(() => {
    localStorage.setItem("stan-licznika", liczba.toString());
  }, [liczba]);

  const dodaj = () => setLiczba(liczba + 1);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 8.1 - Licznik Persistent</h3>
      <div>Stan: {liczba}</div>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik8;
