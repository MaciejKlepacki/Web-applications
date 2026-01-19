import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Witaj w aplikacji Blog!</h1>
      <p>To jest strona główna.</p>
      {/* Link to komponent z React Router, działa jak <a> ale bez przeładowania */}
      <Link to="/blog">Przejdź do Bloga</Link>
    </div>
  );
};

export default Home;
