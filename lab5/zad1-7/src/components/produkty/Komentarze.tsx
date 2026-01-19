import { useState, useEffect } from "react";
import Komentarz from "./Komentarz";

// Powielamy interfejsy tutaj lub można je wyeksportować z poprzedniego pliku
interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarze = () => {
  // Stan przechowujący tablicę komentarzy
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Pobieranie danych po załadowaniu komponentu
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        // API zwraca obiekt { comments: [...], total: ..., skip: ... }
        // My potrzebujemy tylko tablicy 'comments'
        setComments(data.comments);
      })
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Zadanie 7 - Komentarze z API</h2>

      {/* Mapowanie po tablicy komentarzy */}
      {comments.map((comment) => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          likes={comment.likes}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default Komentarze;
