import { useState } from "react";
const Aktualizacja = () => {
  const [produkt, setProdukt] = useState({ nazwa: "Pomidor", cena: 50 });

  const zmienCene = () => {
    // Używamy formy funkcyjnej setProdukt(prev => ...), aby mieć dostęp do poprzedniego stanu
    // ...prev kopiuje wszystkie pola (nazwa, cena)
    // , cena: 100 nadpisuje tylko cenę
    setProdukt((prev) => ({ ...prev, cena: 100 }));
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Zadanie 4.2 - Spread Operator</h3>

      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </div>

      <button onClick={zmienCene}>Zmień cenę</button>
    </div>
  );
};

export default Aktualizacja;
