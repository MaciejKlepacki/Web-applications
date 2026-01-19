import React from "react";
import Produkt from "./Produkt";

// Tablica produktów utworzona na górze komponentu
const Produkty = ["Jabłko", "Gruszka", "Śliwka", "Banan", "Wiśnia"];

const NowyKoszyk: React.FC = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 1.3 - NowyKoszyk</h3>
      {}
      {Produkty.map((item, index) => (
        <Produkt key={index} nazwa={item} />
      ))}
    </div>
  );
};

export default NowyKoszyk;
