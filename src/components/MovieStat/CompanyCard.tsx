type CompanyCardProps = {
  logo_path: string;
  name: string;
};

const CompanyCard = ({ logo_path, name }: CompanyCardProps) => {
  return (
    <div className="flex flex-col shadow-lg h-[230px] w-[180px] rounded-lg mb-5 border hover:cursor-pointer hover:text-gray-400">
      <img
        src={`${
          logo_path === null
            ? "https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-mediumSquareAt3X.jpg"
            : `https://image.tmdb.org/t/p/w500/${logo_path}`
        }`}
        alt="company logo"
        className="h-[160px] rounded-t-lg p-2"
        loading="lazy"
      />
      <h3 className="p-2 text-lg font-semibold truncate w-[180px]">{name}</h3>
    </div>
  );
};

export default CompanyCard;
