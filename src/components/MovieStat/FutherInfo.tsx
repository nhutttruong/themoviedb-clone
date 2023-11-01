import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

type FutherInfoProps = {
  movieDetail: any;
  movieKeywords: any[];
};

const FutherInfo = ({ movieDetail, movieKeywords }: FutherInfoProps) => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className="
        flex flex-col md:flex-row md:justify-between justify-center 
        py-10 max-w-[1400px] w-full "
      >
        {/* left-sided section */}
        <LeftSection movieDetail={movieDetail} />

        {/* right-sided section */}
        <RightSection movieDetail={movieDetail} movieKeywords={movieKeywords} />
      </div>
    </div>
  );
};

export default FutherInfo;
