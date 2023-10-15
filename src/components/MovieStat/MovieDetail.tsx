import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieStats from "./MovieStats";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<any[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNjMTljZWVhNjM5NGQxMTE5Nzc4MTEyMzZkNTg0MCIsInN1YiI6IjY1MDViMzllMTA5ZGVjMDEwY2MxNGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iC_Y_PLWA6966G4etEDtlDOSQfUWlIfH6eKe1J6V2hk",
    },
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((json) => setMovieDetail(json))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div>
      <MovieStats movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetail;
