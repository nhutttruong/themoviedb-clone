type MovieStatsProps = {
  movieDetail: any;
};

import { toHour } from "../../utilities/toHour";

import content from "../../assets/movieDetailIcons/content.png";
import heart from "../../assets/movieDetailIcons/heart.png";
import save from "../../assets/movieDetailIcons/save.png";
import star from "../../assets/movieDetailIcons/star.png";
import play from "../../assets/movieDetailIcons/play.png";

const MainMovieDetail = ({ movieDetail }: MovieStatsProps) => {
  return (
    <div
      className="flex items-center justify-center w-full 
 bg-[#1E0B0B]"
    >
      <div
        className="h-[500px] w-full max-w-[1400px] flex items-center justify-between mt-10
    px-[40px]"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt=""
          className="basis-1/4 object-cover rounded-lg w-[290px] mr-10"
        />

        <div
          className="relative flex flex-col h-full
    bg-[#1E0B0B] basis-3/4 pl-4 overflow-hidden"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
            alt=""
            className="
     absolute object-cover w-full h-full opacity-40 scale-125 "
          />

          {/* movie title */}
          <div className="flex text-[35px] pt-7 z-20">
            <div className="font-[650] text-white">
              {movieDetail.original_title}
            </div>
            <div className="font-semibold text-gray-300">
              ({movieDetail.release_date?.substring(0, 4)})
            </div>
          </div>

          {/* movie genres */}
          <div className="flex items-center gap-2 z-20 ">
            <div className="flex gap-2">
              {movieDetail.genres?.map((genre: any) => (
                <div
                  className="border rounded-md p-[2px] border-gray-400 font-semibold
           text-white hover:text-gray-300 hover:cursor-pointer"
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
            <div className="text-white font-semibold">
              {toHour(movieDetail.runtime)}
            </div>
          </div>

          {/* save, add to watch list and stuffs */}
          <div className="flex pt-9 z-20">
            <div className="flex items-center gap-2 mr-[55px]">
              <div className="relative w-16 h-16 border-[5px] rounded-full border-green-300 flex items-center justify-center bg-[#081C22] hover:scale-110 duration-300 hover:cursor-pointer">
                <h3 className="font-bold text-xl text-white">82</h3>
                <div className="absolute text-[10px] font-bold text-gray-200 translate-x-4 -translate-y-[3px]">
                  %
                </div>
              </div>
              <p className="font-bold text-white w-2">User Score</p>
            </div>

            <div className="flex gap-6 items-center">
              <div className="relative w-12 h-12 rounded-full bg-[#032541] flex items-center justify-center hover:cursor-pointer group">
                <img src={content} alt="content icon" className="w-5" />
                <div className="absolute  w-3 h-3 translate-y-[34px] bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
                <div className="absolute bg-[#032541] w-[100px] h-[40px] translate-y-[50px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
                  Add to list
                </div>
              </div>
              <div className="relative w-12 h-12 rounded-full bg-[#032541] flex items-center justify-center hover:cursor-pointer group">
                <img src={heart} alt=" icon" className="w-5" />
                <div className="absolute  w-3 h-3 translate-y-[34px] bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
                <div className="absolute bg-[#032541] w-[150px] h-[40px] translate-y-[50px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
                  Mark as favorite
                </div>
              </div>
              <div className="relative w-12 h-12 rounded-full bg-[#032541] flex items-center justify-center hover:cursor-pointer group">
                <img src={save} alt=" icon" className="w-5" />
                <div className="absolute  w-3 h-3 translate-y-[34px] bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
                <div className="absolute bg-[#032541] w-[180px] h-[40px] translate-y-[50px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
                  Add to your watchlist
                </div>
              </div>
              <div className="relative w-12 h-12 rounded-full bg-[#032541] flex items-center justify-center hover:cursor-pointer group">
                <img src={star} alt=" icon" className="w-5" />
                <div className="absolute  w-3 h-3 translate-y-[34px] bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
                <div className="absolute bg-[#032541] w-[80px] h-[40px] translate-y-[50px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
                  Rate it
                </div>
              </div>

              <div className="flex items-center group">
                <img
                  src={play}
                  alt="icon"
                  className="w-3 h-4 mr-2 group-hover:cursor-pointer"
                />
                <p className="text-white font-semibold group-hover:cursor-pointer group-hover:text-gray-300">
                  Play Trailer
                </p>
              </div>
            </div>
          </div>

          {/* tagline */}
          <div className="text-gray-200 italic font-medium mt-5 text-[18px] z-[10]">
            {movieDetail.tagline}
          </div>

          {/* overview */}
          <div className="pt-3 flex flex-col gap-3 z-20">
            <h3 className="text-xl font-semibold text-white">Overview</h3>
            <p className="text-white max-w-[900px] basis-11/12">
              {movieDetail.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMovieDetail;
