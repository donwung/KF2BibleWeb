import React, { useState } from "react";
import arrow from "../../assets/img/menu/up-arrow.svg"
const Dropdown = ({ title, classNames, list }) => {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setActive(!active);
  };
  const handleClickStop =(event) =>{
    event.stopPropagation();
  }
  return (
    <li className={`dropdown ${active ? "active" : ""}`} onClick={handleClick}>
      <a href="#!">
        {title}{" "}
        <img
          src={arrow}
          alt=""
          className="caret"
        />
      </a>
      <ul className={`dropdown-content ${classNames}`} onClick={handleClickStop}>{list}</ul>
    </li>
  );
};

export default Dropdown;
