import { useState, useEffect } from "react";

const Tytul = () => {
  const [tytul, setTytul] = useState("");

  // Synchronizacja tytułu strony ze stanem
  useEffect(() => {
    document.title = tytul;
  }, [tytul]);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 6.2 - Tytuł strony</h3>
      <p>Spójrz na kartę przeglądarki podczas pisania.</p>
      <input
        type="text"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
        placeholder="Wpisz nowy tytuł strony..."
      />
    </div>
  );
};

export default Tytul;
