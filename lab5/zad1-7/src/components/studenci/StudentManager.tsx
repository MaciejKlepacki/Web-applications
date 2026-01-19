import { useState } from "react";
import Dodawanie from "./Dodawanie";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const StudentManager = () => {
  // Stan inicjalizujemy przykładowymi danymi
  const [students, setStudents] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 1999 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2000 },
    { imie: "Marek", nazwisko: "Zień", rocznik: 2001 },
  ]);

  // Funkcja dodająca nowego studenta do stanu
  const handleAddStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Zadanie 5.2 - Student Manager</h3>
      <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Komponent z formularzem umieszczony pod tabelą */}
      <Dodawanie onAdd={handleAddStudent} />
    </div>
  );
};

export default StudentManager;
