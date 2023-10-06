import { useState } from "react";
import downArrow from "../assets/filterIcons/arrow-down.png";
import rightArrow from "../assets/filterIcons/right-arrow.png";

const MovieFilter = () => {
  const [showSort, setShowSort] = useState(false);
  return (
    <div className="w-[200px] h-screen  border-2 border-green-500 pl-12 pt-16 mr-8">
      {/* sort */}
      <div className="border border-gray-400 rounded-md shadow-lg">
        <div className="border-b border-b-gray-400 flex justify-between items-center p-1">
          <h3 className="font-bold p-2">Sort</h3>
          <img
            src={`${showSort ? downArrow : rightArrow}`}
            alt=""
            className="w-[12px] h-[12px]
            hover:cursor-pointer"
            onClick={() => setShowSort(!showSort)}
          />
        </div>

        {showSort && (
          <div className="font-thin text-sm">
            <p className="p-2"> Sort Results By</p>
          </div>
        )}
      </div>

      {/* filter */}
      <div></div>

      {/* search button */}
    </div>
  );
};

export default MovieFilter;
