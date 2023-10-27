import React, { useState } from "react";

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
          src="../src/assets/img/menu/up-arrow.svg"
          alt=""
          className="caret"
        />
      </a>
      <ul className={`dropdown-content ${classNames}`} onClick={handleClickStop}>{list}</ul>
    </li>
  );
};

export default Dropdown;
