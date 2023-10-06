import plus from "../assets/headerIcons/plus.svg";
import bell from "../assets/headerIcons/bell.png";
import profileSetting from "../assets/headerIcons/profileSetting.png";
import search from "../assets/headerIcons/search.svg";
import { NavList } from "../constants";
import { titleToLink } from "../utilities";
import NavChild from "./NavChild";

const Navbar = () => {
  return (
    <div className="header-footer-bg flex py-3 px-10 items-center justify-between sticky top-0">
      {/* left container */}
      <div className="flex items-center gap-8">
        <h1
          className="font-bold text-3xl 
        bg-clip-text text-transparent bg-gradient-to-r from-[#8ECEA2] to-[#3EBEC8] tracking-[0.05rem]"
        >
          TMDB
        </h1>

        {NavList.map((item) => (
          <NavChild
            key={item.id}
            navChildId={titleToLink(item.id)}
            navName={item.title}
          />
        ))}
      </div>

      {/* right container */}
      <div className="flex items-center gap-7">
        {/* add movie */}
        <div className="group ">
          <img src={plus} alt="plus icon" className="hover:cursor-pointer" />
          <div
            className="bg-gray-200 fixed hidden 
          group-hover:block text-gray-700 rounded-md py-2"
          >
            <div className="hover:bg-indigo-950 hover:cursor-pointer hover:text-white hover:font-semibold px-3">
              Add New Movie
            </div>
            <div className="hover:bg-indigo-950 hover:cursor-pointer hover:text-white hover:font-semibold px-3">
              Add New TV Show
            </div>
          </div>
        </div>
        {/* language switch */}
        <div className="group">
          <div
            className="text-white font-semibold border border-white px-[3px] rounded-[3px] 
        hover:bg-white hover:text-black hover:cursor-pointer"
          >
            EN
          </div>
        </div>

        {/* notification */}
        <div className="relative">
          <img
            src={bell}
            alt="bell icon"
            className="hover:cursor-pointer z-[1]"
          />
          <div className="text-white text-xs w-[14px] h-[14px] rounded-full bg-[#c61439] flex items-center justify-center absolute z-[2] top-0 right-0 translate-x-1/2 -translate-y-1/2">
            1
          </div>
        </div>
        {/* profile setting */}
        <div>
          <img
            src={profileSetting}
            alt="profileSetting icon"
            className="rounded-full hover:cursor-pointer"
          />
        </div>
        {/* search */}
        <img src={search} alt="search icon" className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
