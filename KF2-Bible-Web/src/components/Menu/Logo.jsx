import React from "react";
import logo from "../../assets/img/menu/kf2-bible-logo.svg";
import exitIcon from "../../assets/img/menu/exit-icon.svg";
import { Link } from "react-router-dom";
const Logo = ({ toggleFunction }) => {
  return (
    <li>
      <Link to={"/"} className="logo">
        <img src={logo} alt="KF2 Bible Logo" className="logo" />
      </Link>
      <img
        src={exitIcon}
        alt=""
        className="exit-icon"
        onClick={toggleFunction}
      />
    </li>
  );
};

export default Logo;
