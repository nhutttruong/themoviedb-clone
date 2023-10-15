import { useState } from "react";
import downArrow from "../../assets/filterIcons/arrow-down.png";
import rightArrow from "../../assets/filterIcons/right-arrow.png";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Slider from "@mui/material/Slider";

import { FlagOptions, Genres } from "../../constants";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className="border border-gray-400 rounded-md shadow-lg mt-[16px]">
      <div className="border-b border-b-gray-400 flex justify-between items-center p-1">
        <h3 className="font-bold p-2">Filter</h3>
        <div
          className="p-1 hover:bg-gray-200 w-[20px] h-[20px] rounded-full flex items-center justify-center hover:cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <img src={`${showFilter ? downArrow : rightArrow}`} alt="" />
        </div>
      </div>

      {showFilter && (
        <div className="font-thin text-sm">
          <div className="border-b border-b-gray-400">
            <p className="p-3"> Show Me</p>
            <Box paddingLeft={2} paddingBottom={2}>
              <FormControl>
                <RadioGroup defaultValue="medium" name="radio-buttons-group">
                  <FormControlLabel
                    value="primary"
                    control={<Radio />} // Use Radio inside FormControlLabel
                    label={<span style={{ fontSize: "14px" }}>Everything</span>}
                    // Provide the label here
                  />
                  <FormControlLabel
                    value="neutral"
                    control={<Radio />}
                    label={
                      <span style={{ fontSize: "14px" }}>
                        Movies I Haven't Seen
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="danger"
                    control={<Radio />}
                    label={
                      <span style={{ fontSize: "14px" }}>
                        Movies I Have Seen
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </div>

          <div className="border-b border-b-gray-400 flex flex-col">
            <p className="p-3"> Release Dates</p>
            <Autocomplete
              options={FlagOptions}
              defaultValue={{
                id: "vn",
                country: "Viet Nam",
              }}
              sx={{
                marginX: 2,
                marginBottom: 2,
              }}
              autoHighlight
              getOptionLabel={(option) => option.country}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{
                    "& > img": { mr: 2, flexShrink: 0 },
                  }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.id}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.id}.png`}
                    alt=""
                  />
                  {option.country} ({option.id})
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
              className="bg-gray-200 m-3 rounded-md hover:bg-gray-300 hover:cursor-pointer"
            />

            <div>
              <div className="flex justify-between items-center px-3 mb-2">
                <p className="font-semibold text-gray-400">from</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker sx={{ width: 40 }} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="flex justify-between items-center px-3 mb-5">
                <p className="font-semibold text-gray-400">to</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker className="w-[60px]" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="border-b border-b-gray-400 flex flex-col pb-2">
            <p className="p-3"> Genres</p>
            <div className="flex flex-wrap px-3 gap-2">
              {Genres.map((genre) => (
                <div
                  className="border p-1 px-2 rounded-[1rem] font-normal hover:cursor-pointer 
                  hover:bg-[#01b4e4] hover:text-white"
                  key={genre.label}
                >
                  {genre.label}
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-b-gray-400">
            <p className="p-3"> Language</p>
          </div>

          <div className="border-b border-b-gray-400">
            <p className="px-3 pt-3"> Runtime</p>
            <Box sx={{ width: "full", p: 1 }}>
              <Slider
                aria-label="minutes"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={400}
              />
            </Box>
          </div>

          <div className="border-b border-b-gray-400 flex flex-col">
            <div>
              <p className="px-3 pt-3"> Keywords</p>
            </div>
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { p: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-size-small"
                  placeholder="filter by keywords..."
                  size="small"
                  fullWidth
                />
              </Box>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
