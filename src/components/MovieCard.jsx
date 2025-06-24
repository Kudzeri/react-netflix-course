import { memo, useCallback, useState } from "react";
import FavoriteButton from "./ui/FavoriteButton";
import { Modal } from "./ui/Modal";
import { Link } from "react-router-dom";

function MovieCard({
  image,
  rating,
  title,
  isfavorite = false,
  trailerYoutubeId,
}) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const openTrailer = useCallback(() => setIsOpenTrailer(true), []);

  return (
    <div className="relative transition-all duration-300 ease-in-out hover:scale-110 shadow-lg rounded-lg overflow-hidden group mb-4 bg-black">
      {isOpenTrailer && (
        <Modal onClose={() => setIsOpenTrailer(false)} title={title}>
          <iframe
            width="373"
            height="210"
            src={`https://www.youtube.com/embed/${trailerYoutubeId}?amp;controls=0`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </Modal>
      )}

      <Link to={`/movies/${trailerYoutubeId}`}>
        <img className="w-55 h-64 object-cover" src={image} alt={title} />
      </Link>

      <div className="absolute top-0 right-0 p-2">
        <FavoriteButton isfavorite={isfavorite} />
        <button
          className="text-2xl hover:cursor-pointer hover:border-2 border-white/50  hover:bg-white/30 rounded-lg transition-colors duration-300"
          onClick={openTrailer}
        >
          🎥
        </button>
      </div>

      <p className="text-white text-sm font-bold p-2 absolute bottom-0 left-0 right-0 text-shadow-2xl group-hover:text-yellow-400 text-center">
        <p>IMDb rating: {rating}</p>
      </p>
    </div>
  );
}

export default memo(MovieCard);
