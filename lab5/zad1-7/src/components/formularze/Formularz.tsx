import React, { useState } from "react";

const Formularz = () => {
  const [tekst, setTekst] = useState("");

  // Funkcja obsługująca zmianę w inpucie
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(event.target.value);
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Zadanie 3.1 - Replikacja tekstu</h3>
      <input
        type="text"
        value={tekst}
        onChange={handleChange}
        placeholder="Wpisz coś..."
      />
      {/* Div, do którego replikujemy tekst */}
      <div style={{ marginTop: "10px", fontWeight: "bold" }}>{tekst}</div>
    </div>
  );
};

export default Formularz;
