import { NavLink } from "react-router-dom";
import { titleToLink, noSpaces } from "../../utilities";
import { NavListElements } from "../../constants";

type NavChildProps = {
  navChildId: string;
  navName: string;
};

const NavChild = ({ navChildId, navName }: NavChildProps) => {
  return (
    <div className="group">
      <h3 className="font-semibold text-white hover:cursor-pointer">
        {navName}
      </h3>
      <ul className="bg-white p-3 rounded-[4px] w-[180px] fixed hidden group-hover:block border border-gray-600">
        {NavListElements.filter(
          (element) => element.id === navChildId
        )[0].items.map((item) => (
          <li
            key={item.id}
            className="pb-[6px] font-mono 
                hover:cursor-pointer hover:font-semibold"
          >
            <NavLink to={`${noSpaces(navName)}/${titleToLink(item.title)}`}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavChild;
