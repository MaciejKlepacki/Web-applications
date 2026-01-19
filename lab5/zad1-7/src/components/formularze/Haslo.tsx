import { useState } from "react";

const Haslo = () => {
  const [haslo, setHaslo] = useState("");
  const [powtorzHaslo, setPowtorzHaslo] = useState("");

  const getMessage = () => {
    // "Proszę wprowadzić hasło - jeżeli żaden z inputów nie zawiera tekstu"
    if (!haslo && !powtorzHaslo) {
      return "Proszę wprowadzić hasło";
    }
    // "Hasła nie są zgodne - jeśli hasła nie są identyczne"
    if (haslo !== powtorzHaslo) {
      return "Hasła nie są zgodne";
    }
    // "Jeżeli hasła są identyczne, div powinien pozostać pusty"
    return "";
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Zadanie 3.2 - Sprawdzanie hasła</h3>
      <div>
        <label>Hasło: </label>
        <input
          type="text"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
      </div>
      <div>
        <label>Powtórz Hasło: </label>
        <input
          type="text"
          value={powtorzHaslo}
          onChange={(e) => setPowtorzHaslo(e.target.value)}
        />
      </div>

      <div style={{ color: "red", marginTop: "10px" }}>{getMessage()}</div>
    </div>
  );
};

export default Haslo;
