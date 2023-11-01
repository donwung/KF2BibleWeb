import React, { useContext, useEffect, useState } from "react";
import { bonusContext, skillContext } from "./Calculator";

const PerkAddon = () => {
  const [bonus, setBonus] = useContext(bonusContext);
  const [skillsObject, setSkillsObject] = useContext(skillContext);
  // Grabs Every Skill and renders a Addon if applicable, then updates bonus state
  const renderAddon = () => {
    // bonus is calculated by using damagemodifier then multiplying stacks. Stacks = 1 means its active
    let bonusCopy = {};
    let bonusList = [];
    let skills = JSON.parse(skillsObject);
    for (let i in skills) {
      // No Condition For Bonus
      if (skills[i][1].length < 4) {
        // Grabs name of skill
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 1,
        };
      } else {
        // Gets damage-modifier value and splits the string
        let addonName = skills[i][1].split(" ")[1];
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 0,
        };
        // Rack Em Up Case
        if (addonName === "Racks") {
          bonusList.push(
            <div className="addon" key={addonName}>
              <label htmlFor={skills[i][0]}>{addonName}</label>
              <input
                type="number"
                defaultValue={0}
                name={skills[i][0]}
                id={skills[i][0]}
                min={0}
                max={5}
              />
            </div>
          );
        } else {
          bonusList.push(
            <div className="addon" key={addonName}>
              <label htmlFor={skills[i][0]}>{addonName}</label>
              <input
                type="checkbox"
                value={1}
                name={skills[i][0]}
                id={skills[i][0]}
              />
            </div>
          );
        }
      }
    }
    return bonusList;
  };
  // Gets Bonuses on render
  const handleAddon = () => {
    // bonus is calculated by using damagemodifier then multiplying stacks. Stacks = 1 means its active
    let bonusCopy = {};
    let skills = JSON.parse(skillsObject);
    for (let i in skills) {
      // No Condition For Bonus
      if (skills[i][1].length < 4) {
        // Grabs name of skill
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 1,
        };
      } else {
        // Gets damage-modifier value and splits the string
        let addonName = skills[i][1].split(" ")[1];
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 0,
        };
      }
    }
    setBonus(JSON.stringify(bonusCopy));
  };
  useEffect(() => {
    handleAddon();
  }, [skillsObject]);
  return (
    <div className="addon-container">
      <div className="addon">ADD FOCUS HERE</div>
      <form
        action=""
        onChange={(event) => {
          handleAddon(event);
        }}
      >
        {renderAddon()}
      </form>
    </div>
  );
};

export default PerkAddon;
