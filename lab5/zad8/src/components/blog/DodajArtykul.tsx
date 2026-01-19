import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DodajArtykul = () => {
  const [tytul, setTytul] = useState("");
  const [tresc, setTresc] = useState("");
  const navigate = useNavigate(); // Hook do przekierowania

  const handleSubmit = () => {
    // Pobierz obecne artykuły lub stwórz pustą tablicę
    const stored = localStorage.getItem("artykuly");
    const artykuly = stored ? JSON.parse(stored) : [];

    // Dodaj nowy
    const nowyArtykul = {
      id: Date.now(), // proste ID na podstawie czasu
      tytul,
      tresc,
    };

    artykuly.push(nowyArtykul);
    localStorage.setItem("artykuly", JSON.stringify(artykuly));

    // Przekieruj do bloga
    navigate("/blog");
  };

  return (
    <div>
      <h2>Dodaj nowy artykuł</h2>
      <input
        placeholder="Tytuł"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <textarea
        placeholder="Treść"
        value={tresc}
        onChange={(e) => setTresc(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <button onClick={handleSubmit}>DODAJ</button>
    </div>
  );
};

export default DodajArtykul;
