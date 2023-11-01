import { Outlet, useLocation } from "react-router-dom";
import MovieFilter from "./Filter/MovieFilter";

const MovieLayout = () => {
  const location = useLocation();

  return (
    <div className="w-full flex justify-center">
      <div className="px-[40px] max-w-[1400px] overflow-hidden">
        <div
          className={`${
            location.pathname.includes("id") ? "" : "flex justify-between"
          } `}
        >
          {/* if it's displaying the movie details then hide the filter */}
          {!location.pathname.includes("id") && <MovieFilter />}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovieLayout;
