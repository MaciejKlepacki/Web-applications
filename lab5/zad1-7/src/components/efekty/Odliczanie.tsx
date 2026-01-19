import { useState, useEffect } from "react";

const Odliczanie = () => {
  // Stan przechowuje czas w milisekundach (15000ms = 15s)
  const [czas, setCzas] = useState(15000);
  // Stan określający czy odliczanie jest aktywne
  const [aktywne, setAktywne] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (aktywne && czas > 0) {
      // Uruchamiamy interwał co 100ms (0.1s)
      interval = setInterval(() => {
        setCzas((prevCzas) => {
          if (prevCzas <= 100) {
            setAktywne(false); // Zatrzymaj jeśli dojdzie do zera
            return 0;
          }
          return prevCzas - 100;
        });
      }, 100);
    }

    // Cleanup function: czyści interwał przy odmontowaniu lub zmianie zależności
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [aktywne, czas]);

  const toggleOdliczanie = () => {
    setAktywne(!aktywne);
  };

  // Formatowanie czasu: dzielimy ms przez 1000 i formatujemy do 1 miejsca po przecinku
  const sformatowanyCzas = (czas / 1000).toFixed(1) + " sek";

  // Przycisk jest nieaktywny, gdy czas dobiegł końca (jest 0)
  const zakonczone = czas === 0;

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 6.3 - Odliczanie</h3>

      <div style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>
        {sformatowanyCzas}
      </div>

      <button onClick={toggleOdliczanie} disabled={zakonczone}>
        {zakonczone ? "Odliczanie zakończone" : aktywne ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default Odliczanie;
