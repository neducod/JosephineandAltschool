// import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch , BsJustify} from "react-icon/bs"
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

const Header = () => {
  return (
    <div className="dashboardHeader">
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>

      <div className="dashboardHeader-left">
        <BsSearch className="icon" />
      </div>

      <div className="dashboardHeader-left">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </div>
  );
};

export default Header;
