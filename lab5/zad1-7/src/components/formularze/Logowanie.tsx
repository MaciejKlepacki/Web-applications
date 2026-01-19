import { useState } from "react";

const Logowanie = () => {
  const [nazwa, setNazwa] = useState("");
  const [haslo, setHaslo] = useState("");
  const [powtorzHaslo, setPowtorzHaslo] = useState("");

  // Przycisk wyłączony, jeśli którekolwiek pole jest puste
  const isDisabled = !nazwa || !haslo || !powtorzHaslo;

  const handleLogin = () => {
    if (haslo !== powtorzHaslo) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano poprawnie");
    }
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Zadanie 3.3 - Logowanie</h3>
      <div style={{ marginBottom: "5px" }}>
        <label>Nazwa użytkownika: </label>
        <input
          type="text"
          value={nazwa}
          onChange={(e) => setNazwa(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <label>Hasło: </label>
        <input
          type="text"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <label>Powtórz Hasło: </label>
        <input
          type="text"
          value={powtorzHaslo}
          onChange={(e) => setPowtorzHaslo(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        disabled={isDisabled}
        style={{ marginTop: "10px" }}
      >
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;
