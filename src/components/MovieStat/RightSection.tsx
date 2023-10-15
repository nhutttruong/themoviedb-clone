import fb from "../../assets/mediaIcons/facebook.png";
import twitter from "../../assets/mediaIcons/twitter.png";
import insta from "../../assets/mediaIcons/insta.png";
import chain from "../../assets/mediaIcons/chain.png";

type RightSectionProps = {
  movieDetail: any;
  movieKeywords: any[];
};

const RightSection = ({ movieDetail, movieKeywords }: RightSectionProps) => {
  return (
    <div className=" basis-1/5 ">
      {/* media */}
      <div className="flex gap-3 p-2">
        <div className="relative group">
          <img
            src={fb}
            alt="fb icon"
            className=" w-[30px] h-[30px] hover:cursor-pointer"
          />
          <div className="absolute  w-3 h-3 -translate-y-[44px] translate-x-2 bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
          <div className="absolute bg-[#032541] w-[120px] h-[40px] -translate-y-[84px] -translate-x-[45px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
            Visit Facebook
          </div>
        </div>
        <div className="relative group">
          <img
            src={twitter}
            alt="fb icon"
            className="w-[30px] h-[30px] hover:cursor-pointer"
          />
          <div className="absolute  w-3 h-3 -translate-y-[44px] translate-x-2 bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
          <div className="absolute bg-[#032541] w-[120px] h-[40px] -translate-y-[84px] -translate-x-[45px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
            Visit Twitter
          </div>
        </div>

        <div className="relative group">
          <img
            src={insta}
            alt="fb icon"
            className="w-[30px] h-[30px] hover:cursor-pointer"
          />
          <div className="absolute  w-3 h-3 -translate-y-[44px] translate-x-2 bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
          <div className="absolute bg-[#032541] w-[120px] h-[40px] -translate-y-[84px] -translate-x-[45px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
            Visit Instagram
          </div>
        </div>

        <span className="border-2 border-gray-500"></span>
        <a href={movieDetail?.homepage} target="_blank">
          <div className="relative group">
            <img
              src={chain}
              alt="fb icon"
              className="w-[30px] hover:cursor-pointer rotate-45"
            />
            <div className="absolute  w-3 h-3 -translate-y-[44px] translate-x-2 bg-[#032541] rotate-45 z-[51] hidden group-hover:flex"></div>
            <div className="absolute bg-[#032541] w-[120px] h-[40px] -translate-y-[84px] -translate-x-[45px] z-50 hidden items-center text-white justify-center rounded-md mt-2 group-hover:flex">
              Visit homepage
            </div>
          </div>
        </a>
      </div>

      {/* status, revenue stuffs */}
      <div className="flex flex-col gap-3">
        <div className="p-2 flex flex-col">
          <h3 className=" font-medium">Status</h3>
          <p className="text-sm">{movieDetail?.status}</p>
        </div>
        <div className="p-2 flex flex-col">
          <h3 className=" font-medium">Original Language</h3>
          <p className="text-sm">
            {movieDetail?.original_language?.toUpperCase()}
          </p>
        </div>
        <div className="p-2 flex flex-col">
          <h3 className=" font-medium">Budget</h3>
          <p className="text-sm">$38,500,000.00</p>
        </div>
        <div className="p-2 flex flex-col">
          <h3 className=" font-medium">Revenue</h3>
          <p className="text-sm">$248,010,000.00</p>
        </div>
      </div>

      {/* keywords */}
      <div className="border-b border-b-gray-300 pb-8">
        <h3 className="p-2 text-xl font-semibold">Keywords</h3>
        <div className="p-2 flex gap-2 flex-wrap">
          {movieKeywords?.map((keyword) => (
            <div
              key={keyword?.id}
              className="px-3 rounded-[4px] bg-[#E5E5E5] border-2 border-gray-300 hover:cursor-pointer hover:border-[#E5E5E5]"
            >
              {keyword.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSection;
