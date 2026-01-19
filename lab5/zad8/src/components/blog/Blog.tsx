import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Definicja typu artykułu
interface Artykul {
  id: number;
  tytul: string;
  tresc: string;
}

const Blog = () => {
  const [artykuly, setArtykuly] = useState<Artykul[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("artykuly");
    if (stored) {
      setArtykuly(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h2>Lista Artykułów</h2>
      <Link to="/dodaj" style={{ marginBottom: "20px", display: "block" }}>
        + Dodaj nowy artykuł
      </Link>

      <ul>
        {artykuly.map((art) => (
          <li key={art.id}>
            <Link to={`/article/${art.id}`}>{art.tytul}</Link>
          </li>
        ))}
      </ul>
      {artykuly.length === 0 && <p>Brak artykułów. Dodaj jakiś!</p>}
    </div>
  );
};

export default Blog;
