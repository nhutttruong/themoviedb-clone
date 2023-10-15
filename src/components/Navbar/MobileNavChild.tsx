import { useState } from "react";
import { NavListElements } from "../../constants";

type MobileNavChildProps = {
  navChildId: string;
  navName: string;
};

const MobileNavChild = ({ navChildId, navName }: MobileNavChildProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <h2
        className="font-[600] text-xl hover:cursor-pointer text-gray-100"
        onClick={() => setShow(!show)}
      >
        {navName}
      </h2>

      {show && (
        <div className="flex flex-col gap-2 pt-1">
          {NavListElements.filter(
            (element) => element.id === navChildId
          )[0].items.map((item) => (
            <h4 className="text-gray-400 font-semibold">{item.title}</h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavChild;
