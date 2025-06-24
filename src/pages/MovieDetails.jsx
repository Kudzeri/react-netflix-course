import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../data/movies";

const LazyMovieComments = lazy(() =>
  import("../components/MovieComments").then((module) => ({
    default: module.MovieComments,
  }))
);

export function MovieDetails() {
  const { id } = useParams();
  // const [movie, _] = useMemo(() => {
  //   const foundMovie = Movies.find((movie) => movie.trailerYoutubeId === id);
  //   return [foundMovie];
  // }, [id]);
  const movie = useMemo(() => {
    return Movies.find((movie) => movie.trailerYoutubeId === id);
  }, [id]);
  return (
    <div>
      {movie ? (
        <div className=" flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl  md:text-4xl font-bold mb-4">
            {movie.title}
          </h1>
          <p className="text-lg mb-2">IMDb Rating: {movie.rating}</p>

          <img
            className="w-80 h-96 object-cover mb-4 mx-auto"
            src={movie.img}
            alt={movie.title}
          />
          <span className="w-[70%] h-1 bg-white " />
          <p className="text-lg mb-4 text-center">{movie.description}</p>
          <span className="w-[70%] h-1 bg-white mb-2" />
          <iframe
            width="360"
            height="260"
            src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}`}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <Suspense
            fallback={
              <div className="text-white">Загрузка комментариев...</div>
            }
          >
            <LazyMovieComments />
          </Suspense>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-white">
          Фильм не найден
        </div>
      )}
    </div>
  );
}
