import React, { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

interface DodawanieProps {
  onAdd: (student: Student) => void;
}

const Dodawanie: React.FC<DodawanieProps> = ({ onAdd }) => {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Walidacja: czy pola są wypełnione
    if (!imie || !nazwisko || !rocznik) {
      alert("Wypełnij wszystkie pola!");
      return;
    }

    // Walidacja: czy rocznik jest liczbą
    const rocznikNumber = parseInt(rocznik);
    if (isNaN(rocznikNumber)) {
      alert("Rocznik musi być liczbą!");
      return;
    }

    onAdd({
      imie,
      nazwisko,
      rocznik: rocznikNumber,
    });

    setImie("");
    setNazwisko("");
    setRocznik("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Dodaj studenta</h4>
      <div>
        <input
          placeholder="Imię"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Nazwisko"
          value={nazwisko}
          onChange={(e) => setNazwisko(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Rocznik"
          value={rocznik}
          onChange={(e) => setRocznik(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default Dodawanie;
