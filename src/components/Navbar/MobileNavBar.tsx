import { useState } from "react";
import { menu, close } from "../../assets/headerIcons";
import { NavList } from "../../constants";
import MobileNavChild from "./MobileNavChild";
import { titleToLink } from "../../utilities";

const MobileNavBar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <div>
      <div className=" header-footer-bg flex py-3 px-5 items-center justify-between sticky top-0 md:hidden">
        <div className="flex items-center gap-4 ">
          <img
            src={!showMobileNavbar ? menu : close}
            alt="menu icon"
            className="h-[30px] hover:cursor-pointer"
            onClick={() => setShowMobileNavbar(!showMobileNavbar)}
          />
          <h1
            className="font-bold text-3xl 
    bg-clip-text text-transparent bg-gradient-to-r from-[#8ECEA2] to-[#3EBEC8] tracking-[0.05rem]"
          >
            TMDB
          </h1>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`w-3/4 fixed ${
          showMobileNavbar ? "left-0" : "left-[-100%]"
        } bg-[#052C49] h-full duration-300 flex flex-col pl-4 pt-5 gap-4`}
      >
        {NavList.map((item) => (
          <MobileNavChild
            navChildId={titleToLink(item.id)}
            navName={item.title}
            key={item.id}
          />
        ))}

        <h4 className="text-gray-400 font-semibold">About</h4>
        <h4 className="text-gray-400 font-semibold">Login</h4>
      </div>

      {/* this div is used to handle click outside of sidebar( close the sidebar)*/}
      <div
        className={`w-1/4 fixed ${
          showMobileNavbar ? "right-0" : "left-[-100%]"
        } h-full duration-300 flex flex-col pl-4 pt-5 gap-4`}
        onClick={() => setShowMobileNavbar(!MobileNavBar)}
      ></div>
    </div>
  );
};

export default MobileNavBar;
