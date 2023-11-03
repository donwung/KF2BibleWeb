import React, { createContext, useState, useEffect } from "react";
import Player from "./Player";
import perks from "../../assets/data/perks.json";
import { useContext } from "react";
import PerkAddon from "./PerkAddon";
export const perkContext = createContext();
export const skillContext = createContext();
export const lvlContext = createContext();
export const bonusContext = createContext("asd");
const Calculator = () => {
  const [perkObject, setPerkObject] = useState(JSON.stringify(perks[0]));
  const [skillsObject, setSkillsObject] = useState("{}");
  const [lvl, setLvl] = useState(25);
  const [bonus, setBonus] = useState("{}");
  const [currentBonus, setCurrentBonus] = useState(0);
  const getBonus = () => {
    let total = 0;
    let obj = JSON.parse(bonus);
    for (let i in obj) {
      total += obj[i]["damage-modifier"] * obj[i]["stacks"];
    }
    total += JSON.parse(perkObject)["perk-level-bonus"] * lvl;
    setCurrentBonus(total);
  };
  useEffect(() => {
    getBonus();
  }, [bonus, skillsObject, lvl]);
  return (
    <div className="container">
      <perkContext.Provider value={[perkObject, setPerkObject]}>
        <skillContext.Provider value={[skillsObject, setSkillsObject]}>
          <lvlContext.Provider value={[lvl, setLvl]}>
            <bonusContext.Provider value={[bonus, setBonus]}>
              <Player />
            </bonusContext.Provider>
          </lvlContext.Provider>
        </skillContext.Provider>
      </perkContext.Provider>
      {/* <p>PerkObject:{perkObject}</p> */}
      {/* <p>Skills:{JSON.stringify(skillsObject)}</p> */}
      {/* <p>Current: Lvl:{lvl}</p> */}
      <p>Total Bonus:{currentBonus}</p>
      {/* {JSON.stringify(bonus)} */}
    </div>
  );
};

export default Calculator;
