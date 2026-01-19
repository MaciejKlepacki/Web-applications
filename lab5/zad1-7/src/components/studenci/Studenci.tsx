import React from "react";

// Definicja interfejsu zgodnie z instrukcją
interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Studenci = () => {
  // Tablica studentów z typowaniem
  const Students: Student[] = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 1999 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2000 },
    { imie: "Marek", nazwisko: "Zień", rocznik: 2001 },
  ];

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 5.1 - Lista Studentów</h3>
      <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapowanie tablicy na wiersze tabeli */}
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenci;
