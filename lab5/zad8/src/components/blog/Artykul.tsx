import { useParams } from "react-router-dom";

interface ArtykulType {
  id: number;
  tytul: string;
  tresc: string;
}

const Artykul = () => {
  const { id } = useParams(); // Pobiera parametr :id z URL

  // Pobieramy dane z localStorage
  const stored = localStorage.getItem("artykuly");
  const artykuly: ArtykulType[] = stored ? JSON.parse(stored) : [];

  // Szukamy artykułu o danym ID
  const artykul = artykuly.find((a) => a.id === parseInt(id || "0"));

  if (!artykul) return <div>Nie znaleziono artykułu.</div>;

  return (
    <div>
      <h2>{artykul.tytul}</h2>
      <p>{artykul.tresc}</p>
    </div>
  );
};

export default Artykul;
