import { NavLink } from "react-router-dom";

type MovieCard = {
  id: string;
  dateRelease: string;
  posterPath: string;
  title: string;
};

const MovieCard = ({ id, dateRelease, posterPath, title }: MovieCard) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
      <NavLink to={`/movies/id/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="poster"
          className="w-full hover:cursor-pointer hover:scale-105 duration-500"
        />
      </NavLink>
      <div className="flex flex-col bg-white p-3">
        <NavLink to={`/movies/id/${id}`}>
          <h3 className="text-lg truncate hover:text-[#2FC1E9] hover:cursor-pointer">
            {title}
          </h3>
        </NavLink>
        <p className="text-xs font-normal text-gray-500">{dateRelease}</p>
      </div>
    </div>
  );
};

export default MovieCard;
