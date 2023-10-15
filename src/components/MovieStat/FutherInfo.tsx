import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

type FutherInfoProps = {
  movieDetail: any;
  movieKeywords: any[];
};

const FutherInfo = ({ movieDetail, movieKeywords }: FutherInfoProps) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex py-10 max-w-[1400px] w-full justify-between ">
        {/* left-sided section */}
        <LeftSection movieDetail={movieDetail} />

        {/* right-sided section */}
        <RightSection movieDetail={movieDetail} movieKeywords={movieKeywords} />
      </div>
    </div>
  );
};

export default FutherInfo;
