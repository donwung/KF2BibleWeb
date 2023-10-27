import PerkMenu from "./PerkMenu"
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import "../../styles/menu/menu.css"
import { useState } from "react";


const Menu = () => {
  const [active, setActive] = useState(false);
  
  const handleClick= () =>{setActive(!active)}
  return (
    <>
      <div className={`gradient ${active ? "active" : ""}`} onClick={handleClick}></div>
    <header className={`${active ? "active" : ""}`}>
      <img src="../src/assets/img/menu/menu.svg" alt="" className="hamburger-menu" onClick={handleClick} />
      <nav className="container">
        <ul className="menu">
          <Logo toggleFunction={handleClick}/>
          <Dropdown title="Precision Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="precision"/>}/>
          <Dropdown title="Chaos Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="chaos"/>}/>
          <Dropdown title="Precision Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="precision"/>}/>
          <Dropdown title="Chaos Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="chaos"/>}/>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Menu;
