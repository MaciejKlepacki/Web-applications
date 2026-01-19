# WdAI Lab 05 - Zadanie 8 (Router & LocalStorage)

Osobny projekt realizujący zadanie 8, skupiający się na **React Router** oraz trwałym zapisie danych w **LocalStorage**.

## 📋 Opis Zadań

### Zadanie 8.1 - Persistent Counter
Komponent licznika, który zapamiętuje swoją wartość po odświeżeniu strony.
* Lokalizacja: `src/components/licznik-storage/Licznik8.tsx`
* Technologia: `localStorage`, `useEffect`.

### Zadanie 8.2 - System Blogowy
Aplikacja typu SPA (Single Page Application) umożliwiająca przeglądanie i dodawanie artykułów.
* **Routing**: Nawigacja bez przeładowania strony (`react-router-dom`).
* **Storage**: Artykuły są zapisywane w przeglądarce.
* **Podstrony**:
    * `/` - Strona główna (Home).
    * `/blog` - Lista artykułów.
    * `/article/:id` - Widok pojedynczego artykułu.
    * `/dodaj` - Formularz dodawania nowego wpisu.

## 🛠 Wymagania i Uruchomienie

Projekt wymaga biblioteki `react-router-dom`.

1. Zainstaluj zależności:
   ```bash
   npm install
2. Uruchom aplikację:
   ```bash
   npm run dev
