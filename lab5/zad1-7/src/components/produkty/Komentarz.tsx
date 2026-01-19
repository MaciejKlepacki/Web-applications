import React, { useState } from "react";

// Definicja interfejsu dla Użytkownika (zagnieżdżony obiekt)
interface User {
  id: number;
  username: string;
  fullName: string;
}

// Definicja propsów dla Komentarza
interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({
  id,
  body,
  postId,
  likes,
  user,
}) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => setLikeCount(likeCount + 1);
  const handleDislike = () => setLikeCount(likeCount - 1);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        {/* Avatar i nazwa użytkownika */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#2196F3",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          {user.username[0].toUpperCase()}
        </div>
        <div>
          <h4 style={{ margin: 0 }}>
            {user.fullName} (@{user.username})
          </h4>
          <small style={{ color: "gray" }}>
            Post ID: {postId} | Comment ID: {id}
          </small>
        </div>
      </div>

      <p style={{ fontStyle: "italic" }}>"{body}"</p>

      <div style={{ marginTop: "10px" }}>
        <span style={{ fontWeight: "bold", marginRight: "10px" }}>
          Likes: {likeCount}
        </span>
        <button
          onClick={handleLike}
          style={{ marginRight: "5px", cursor: "pointer" }}
        >
          👍
        </button>
        <button onClick={handleDislike} style={{ cursor: "pointer" }}>
          👎
        </button>
      </div>
    </div>
  );
};

export default Komentarz;
