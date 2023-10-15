import FilterSection from "./FilterSection";
import Sort from "./SortSection";

const MovieFilter = () => {
  return (
    <div className="w-[330px] h-full pt-16 mr-8">
      <Sort />

      {/* filter */}
      <FilterSection />

      {/* search button */}
      <button className="bg-[#01B4E4] w-full text-white font-bold text-lg mt-5 h-[45px] rounded-3xl hover:bg-[#032541]">
        Search
      </button>
    </div>
  );
};

export default MovieFilter;
