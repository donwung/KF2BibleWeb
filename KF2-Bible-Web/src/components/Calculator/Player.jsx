import React, { useContext } from "react";
import { lvlContext, perkContext } from "./Calculator.jsx";
import perks from "../../assets/data/perks.json";
import SkillList from "./SkillList.jsx";
const Player = () => {
  // Contexts
  const [perkObject, setPerkObject] = useContext(perkContext);
  const [lvl, setLvl] = useContext(lvlContext);
  // Creates DropDown Options and passes perk skills as the values
  const perkDropdown = perks.map((perk) => (
    <option value={JSON.stringify(perk)} key={perk.name}>
      {perk.name}
    </option>
  ));

  // Handle
  const handlePerkChange = (event) => {
    setPerkObject(event.target.value);
  };
  const handleLvlChange = (event) => {
    let value = event.target.value;
    if (value > 25) value = 25;
    else if (value < 1) value = 1;
    event.target.value = value;
    setLvl(value);
  };
  return (
    <div className="player">
      <select
        name="perkSelection"
        id="perkSelection"
        onChange={(event) => handlePerkChange(event)}
      >
        {perkDropdown}
      </select>
      <input
        type="number"
        name="lvl"
        id="lvl"
        defaultValue={25}
        onChange={(event) => {
          handleLvlChange(event);
        }}
        step={5}
      />
      <SkillList />
    </div>
  );
};

export default Player;
