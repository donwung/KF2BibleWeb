import React, { createContext, useState } from "react";
import Player from "./Player";
import perks from "../../assets/data/perks.json";
import { useContext } from "react";
export const perkContext = createContext();
export const skillContext = createContext();
export const lvlContext = createContext();

const Calculator = () => {
  const [perkObject, setPerkObject] = useState(JSON.stringify(perks[0]));
  const [skills, setSkills] = useState();
  const [lvl, setLvl] = useState(25);
  return (
    <div className="container">
      <perkContext.Provider value={[perkObject, setPerkObject]}>
        <skillContext.Provider value={[skills, setSkills]}>
          <lvlContext.Provider value={[lvl, setLvl]}>
            <Player />
          </lvlContext.Provider>
        </skillContext.Provider>
      </perkContext.Provider>
      {/* <p>PerkObject:{perkObject}</p> */}
      {/* <p>Skills:{skills}</p>
      <p>Current: Lvl:{lvl}</p> */}
    </div>
  );
};

export default Calculator;
