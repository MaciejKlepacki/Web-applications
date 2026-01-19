import { useState } from "react";
import Przycisk from "./Przycisk";

const NowyLicznik = () => {
  const [liczba, setLiczba] = useState(0);

  const dodaj = () => {
    setLiczba(liczba + 1);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 2.2 - Nowy Licznik</h3>
      {/* Div z licznikiem pozostaje w komponencie nadrzędnym */}
      <div>Stan licznika: {liczba}</div>

      {/* Przekazujemy funkcję 'dodaj' do komponentu dziecka */}
      <Przycisk dodaj={dodaj} />
    </div>
  );
};

export default NowyLicznik;
