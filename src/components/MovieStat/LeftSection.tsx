type LeftSectionProps = {
  movieDetail: any;
};
import CompanyCard from "./CompanyCard";

const LeftSection = ({ movieDetail }: LeftSectionProps) => {
  return (
    <div className="flex flex-col basis-4/5 w-[1024px] ">
      {/* production companies */}
      <div className="min-w-[1000px] w-full">
        <h3 className="text-2xl font-semibold">Production companies</h3>
        <div className="pt-4 flex gap-5 overflow-auto ">
          {movieDetail.production_companies?.map(
            (company: { logo_path: string; name: string }) => (
              <CompanyCard
                logo_path={company.logo_path}
                name={company.name}
                key={company.name}
              />
            )
          )}
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default LeftSection;
