import { plus, bell, profileSetting, search } from "../../assets/headerIcons";

import { NavLink } from "react-router-dom";
import { NavList } from "../../constants";
import { titleToLink } from "../../utilities";
import NavChild from "./NavChild";

const Navbar = () => {
  return (
    <div className="flex header-footer-bg items-center justify-center">
      <div
        className="hidden md:flex py-3 items-center justify-between sticky top-0 z-[100] 
       w-full max-w-[1400px] px-[40px]"
      >
        {/* left container */}
        <div className="items-center gap-8 flex ">
          <NavLink to="/">
            <h1
              className="font-bold text-3xl 
        bg-clip-text text-transparent bg-gradient-to-r from-[#8ECEA2] to-[#3EBEC8] tracking-[0.05rem]"
            >
              TMDB
            </h1>
          </NavLink>

          {NavList.map((item) => (
            <NavChild
              key={item.id}
              navChildId={titleToLink(item.id)}
              navName={item.title}
            />
          ))}
        </div>

        {/* right container */}
        <div className="flex items-center gap-7 pb-1 ">
          {/* add movie */}
          <div className="group relative">
            <img src={plus} alt="plus icon" className="hover:cursor-pointer" />
            <div
              className="absolute w-3 h-3 
            translate-y-[5px] translate-x-[5px] bg-white rotate-45 z-[51] hidden group-hover:flex"
            ></div>
            <div
              className="absolute bg-white w-[180px] h-[40px] 
            translate-y-[4px] z-50  -translate-x-[75px] hidden items-center  justify-center rounded-md mt-2 group-hover:flex"
            >
              Add movie or TV show
            </div>
          </div>
          {/* language switch */}
          <div className="group">
            <div
              className="text-white font-semibold border border-white px-[3px] rounded-[3px] 
        hover:bg-white hover:text-black hover:cursor-pointer"
            >
              EN
              <div
                className="absolute w-3 h-3 
            translate-y-[5px] translate-x-[5px] bg-white rotate-45 z-[51] hidden group-hover:flex"
              ></div>
              <div
                className="absolute bg-white w-[150px] h-[40px] 
            translate-y-[4px] z-50  -translate-x-[75px] hidden items-center  justify-center rounded-md mt-2 group-hover:flex"
              >
                Select language
              </div>
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
          <div className="group relative">
            <img
              src={profileSetting}
              alt="profileSetting icon"
              className="rounded-full hover:cursor-pointer"
            />
            <div
              className="absolute w-3 h-3 
            translate-y-[5px] translate-x-[5px] bg-white rotate-45 z-[51] hidden group-hover:flex"
            ></div>
            <div
              className="absolute bg-white w-[150px] h-[40px] 
            translate-y-[4px] z-50  -translate-x-[75px] hidden items-center  justify-center rounded-md mt-2 group-hover:flex"
            >
              Profile and setting
            </div>
          </div>
          {/* search */}
          <img
            src={search}
            alt="search icon"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
