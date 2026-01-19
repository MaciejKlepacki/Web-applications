import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import LicznikEfekt from "./components/efekty/Licznik";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarze from "./components/produkty/Komentarze";

function App() {
  return (
    <div className="App">
      <Koszyk />
      <NowyKoszyk />
      <Licznik />
      <NowyLicznik />
      <Formularz />
      <Haslo />
      <Logowanie />
      <Ternary />
      <Aktualizacja />
      <Studenci />
      <StudentManager />
      <LicznikEfekt />
      <Tytul />
      <Odliczanie />
      <Komentarze />
    </div>
  );
}

export default App;
