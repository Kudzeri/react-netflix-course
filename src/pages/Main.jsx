import { useEffect, useMemo, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movies } from "../data/movies";
import Header from "../components/Header";
import { useDebounce } from "../hooks/useDebounce";

const fetchMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Movies;
};

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    document.title = "Movie App";

    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };

    loadMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, movies]);

  if (loading) {
    return (
      <>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-white">
          Загрузка фильмов...
        </div>
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-white">
          Фильмы не найдены
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen  text-white ">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredMovies.length === 0 ? (
        <div className="flex justify-center items-center min-h-[70vh] text-2xl font-bold">
          Фильмы не найдены
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
            {filteredMovies.map((movie, index) => (
              <MovieCard
                key={index}
                image={movie.img}
                rating={movie.rating}
                title={movie.title}
                isfavorite={movie.isfavorite}
                trailerYoutubeId={movie.trailerYoutubeId}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
