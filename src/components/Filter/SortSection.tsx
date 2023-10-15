import { useState } from "react";

import downArrow from "../../assets/filterIcons/arrow-down.png";
import rightArrow from "../../assets/filterIcons/right-arrow.png";

import { Autocomplete, TextField } from "@mui/material";
import { SortOptions } from "../../constants";
const Sort = () => {
  const [showSort, setShowSort] = useState(true);
  return (
    <div className="border border-gray-400 rounded-md shadow-lg ">
      <div className="border-b border-b-gray-400 flex justify-between items-center p-1">
        <h3 className="font-bold p-2">Sort</h3>
        <div
          className="p-1 hover:bg-gray-200 w-[20px] h-[20px] rounded-full flex items-center justify-center hover:cursor-pointer"
          onClick={() => setShowSort(!showSort)}
        >
          <img src={`${showSort ? downArrow : rightArrow}`} alt="" />
        </div>
      </div>

      {showSort && (
        <div className="font-thin text-sm">
          <p className="p-3"> Sort Results By</p>
          <Autocomplete
            disablePortal
            options={SortOptions}
            defaultValue={{ label: "Popularity Descending" }}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  style: { fontSize: "13px" },
                }}
              />
            )}
            className="bg-gray-200 m-3 rounded-md hover:bg-gray-300 hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Sort;
