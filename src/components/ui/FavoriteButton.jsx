import { memo, useState } from "react";

function FavoriteButton({ isfavorite = false }) {
  const [isFavorite, setIsFavorite] = useState(isfavorite);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <button
      className="text-2xl hover:cursor-pointer hover:border-2 border-white/50  hover:bg-white/30 rounded-lg transition-colors duration-300"
      onClick={toggleFavorite}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default memo(FavoriteButton);