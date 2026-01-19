import React from "react";
import Produkt from "./Produkt";

const Koszyk: React.FC = () => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 1.1 - Koszyk</h3>
      {/* Pięciokrotne wywołanie komponentu Produkt */}
      <Produkt nazwa="Jabłko" />
      <Produkt nazwa="Gruszka" />
      <Produkt nazwa="Banan" />
      <Produkt nazwa="Śliwka" />
      <Produkt nazwa="Wiśnia" />
    </div>
  );
};

export default Koszyk;
