type MovieStatsProps = {
  movieDetail: any;
};

import { useEffect, useState } from "react";

import MainMovieDetail from "./MainMovieDetail";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import FutherInfo from "./FutherInfo";

const MovieStats = ({ movieDetail }: MovieStatsProps) => {
  const [movieKeywords, setMovieKeywords] = useState<Array<any>>([]);

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
      `https://api.themoviedb.org/3/movie/${movieDetail?.id}/keywords`,
      options
    )
      .then((res) => res.json())
      .then((json) => setMovieKeywords(json?.keywords))
      .catch((err) => console.error("error:" + err));
  }, [movieDetail]);

  return (
    <div className="w-full">
      {/* movie detail */}
      <MainMovieDetail movieDetail={movieDetail} />

      {/* futher info */}
      <FutherInfo movieDetail={movieDetail} movieKeywords={movieKeywords} />
    </div>
  );
};

export default MovieStats;
