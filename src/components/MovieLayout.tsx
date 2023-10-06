import { Outlet } from "react-router-dom";
import MovieFilter from "./MovieFilter";

const MovieLayout = () => {
  return (
    <div className="flex">
      <MovieFilter />
      <Outlet />
    </div>
  );
};

export default MovieLayout;
