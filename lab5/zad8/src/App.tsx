import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importy komponentów
import Licznik8 from "./components/licznik-storage/Licznik8";
import Home from "./components/blog/Home";
import Blog from "./components/blog/Blog";
import Artykul from "./components/blog/Artykul";
import DodajArtykul from "./components/blog/DodajArtykul";

function App() {
  return (
    // BrowserRouter musi otaczać całą aplikację
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        {/* Sekcja Zadania 8.1 */}
        <section
          style={{ marginBottom: "40px", borderBottom: "2px solid black" }}
        >
          <h2>Zadanie 8.1</h2>
          <Licznik8 />
        </section>

        {/* Sekcja Zadania 8.2 - Blog */}
        <section>
          <h2>Zadanie 8.2 - Blog System</h2>

          {/* Menu nawigacyjne */}
          <nav
            style={{
              marginBottom: "20px",
              padding: "10px",
              background: "#eee",
            }}
          >
            <Link to="/" style={{ marginRight: "10px" }}>
              Home
            </Link>
            <Link to="/blog" style={{ marginRight: "10px" }}>
              Blog
            </Link>
            <Link to="/dodaj">Dodaj Artykuł</Link>
          </nav>

          {/* Konfiguracja ścieżek */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<Artykul />} />
            <Route path="/dodaj" element={<DodajArtykul />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
