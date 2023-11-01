import React, { createContext, useState } from "react";
import Player from "./Player";
import perks from "../../assets/data/perks.json";
import { useContext } from "react";
import PerkAddon from "./PerkAddon";
export const perkContext = createContext();
export const skillContext = createContext();
export const lvlContext = createContext();
export const focusContext = createContext();
const Calculator = () => {
  const [perkObject, setPerkObject] = useState(JSON.stringify(perks[0]));
  const [skills, setSkills] = useState([]);
  const [lvl, setLvl] = useState(25);
  const [focus, setFocus] = useState(0);
  return (
    <div className="container">
      <perkContext.Provider value={[perkObject, setPerkObject]}>
        <skillContext.Provider value={[skills, setSkills]}>
          <lvlContext.Provider value={[lvl, setLvl]}>
            <focusContext.Provider value={[focus, setFocus]}>
              <Player />
              <PerkAddon />
            </focusContext.Provider>
          </lvlContext.Provider>
        </skillContext.Provider>
      </perkContext.Provider>
      {/* <p>PerkObject:{perkObject}</p> */}
      <p>Skills:{skills}</p>
      {/* <p>Current: Lvl:{lvl}</p> */}
    </div>
  );
};

export default Calculator;
