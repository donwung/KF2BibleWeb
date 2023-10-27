import PerkMenu from "./PerkMenu"
import Dropdown from "./Dropdown";
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
          <Dropdown title="Precision Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="precision"/>}/>
          <Dropdown title="Chaos Perks" classNames={"perk-dropdown"} list={<PerkMenu perkType="chaos"/>}/>
          <li>
            <a href="#!">Tools</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
