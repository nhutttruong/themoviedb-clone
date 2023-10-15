import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

const Popular = () => {
  const [movieList, setMovieList] = useState<any[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNjMTljZWVhNjM5NGQxMTE5Nzc4MTEyMzZkNTg0MCIsInN1YiI6IjY1MDViMzllMTA5ZGVjMDEwY2MxNGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iC_Y_PLWA6966G4etEDtlDOSQfUWlIfH6eKe1J6V2hk",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response?.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="font-bold text-2xl mt-6 w-full">
      <h1 className="pb-2">Popular movies</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movieList.map((movie) => (
          <MovieCard
            id={movie.id}
            dateRelease={movie?.release_date}
            posterPath={movie?.poster_path}
            title={movie.original_title}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
