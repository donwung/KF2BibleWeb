import PerkMenu from "./PerkMenu"
import "../../styles/menu/menu.css"

const Menu = () => {
  const precision = [
    "sharpshooter",
    "commando",
    "gunslinger",
    "support",
    "swat",
    "medic",
  ];
  const precisionList = precision.map((perk)=> <PerkMenu perkName={perk}/>)
  return (
    <header>
      <nav className="container">
        <ul className="menu">
          <li>
            <a href="#!">Precision Perks</a>
            <ul className="dropdown">
              {precisionList}
            </ul>
          </li>
          <li>
            <a href="#!">Chaos Perks</a>
          </li>
          <li>
            <a href="#!">Tools</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
