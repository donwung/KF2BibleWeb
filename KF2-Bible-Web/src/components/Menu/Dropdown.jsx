import React, { useState } from 'react'

const Dropdown = ({title, classNames, list}) => {
  const [active, setActive] = useState(false);

  const handleClick= () =>{setActive(!active)}
  return (
    <li className={`dropdown ${active ? "active" : ""}`} onClick={handleClick}>
        <a href="#!">{title}</a>
        <ul className={`dropdown-content ${classNames}`}>
            {list}
        </ul>
    </li>
  )
}

export default Dropdown