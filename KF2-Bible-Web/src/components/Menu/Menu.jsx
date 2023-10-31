import PerkMenu from "./PerkMenu";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import "../../styles/menu/menu.css";
import menuLogo from "../../assets/img/menu/menu.svg";
import { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      {/* Gradient */}
      <div
        className={`gradient ${active ? "active" : ""}`}
        onClick={handleClick}
      ></div>
      <img
        src={menuLogo}
        alt=""
        className="hamburger-menu"
        onClick={handleClick}
      />
      <header className={`${active ? "active" : ""}`}>
        <nav>
          <ul className="menu">
            <Logo toggleFunction={handleClick} />
            <Dropdown
              title="Precision Perks"
              classNames={"perk-dropdown"}
              list={<PerkMenu perkType="precision" />}
            />
            <Dropdown
              title="Chaos Perks"
              classNames={"perk-dropdown"}
              list={<PerkMenu perkType="chaos" />}
            />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
