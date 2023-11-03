import React, { useContext, useEffect, useStat, useRef } from "react";
import { bonusContext, skillContext } from "./Calculator";

const PerkAddon = () => {
  const [bonus, setBonus] = useContext(bonusContext);
  const [skillsObject, setSkillsObject] = useContext(skillContext);
  const form = useRef();
  // Grabs Every Skill and renders a Addon if applicable, then updates bonus state
  const renderAddon = () => {
    // bonus is calculated by using damagemodifier then multiplying stacks. Stacks = 1 means its active
    let bonusCopy = {};
    let bonusList = [];
    let skills = JSON.parse(skillsObject);
    for (let i in skills) {
      if (skills[i][1].length > 3) {
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
                name={skills[i][0]}
                id={skills[i][0]}
                defaultChecked
              />
            </div>
          );
        }
      }
    }
    return bonusList;
  };
  useEffect(() => {
    updateBonus();
  }, [skillsObject]);

  const updateBonus = () => {
    let bonusCopy = {};
    let skills = JSON.parse(skillsObject);
    //Sets Templates for Bonus Objects
    for (let i in skills) {
      // No Condition For Bonus
      if (skills[i][1].length < 4) {
        // Grabs name of skill
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 1,
        };
      } else {
        bonusCopy[`${skills[i][0]}`] = {
          "damage-modifier": parseFloat(skills[i][1]),
          stacks: 0,
        };
      }
    }
    // Then Sets Stacks according to the value inputed in the Form
    let addons = Array.from(form.current);
    addons.forEach((addon) => {
      if (addon.name !== "Rack 'em Up") {
        bonusCopy[addon.name]["stacks"] = addon.checked ? 1 : 0;
      } else {
        bonusCopy[addon.name]["stacks"] = parseFloat(addon.value);
      }
    });
    setBonus(JSON.stringify(bonusCopy));
  };
  return (
    <div className="addon-container">
      <div className="addon">ADD FOCUS HERE</div>
      <form action="" ref={form} onChange={updateBonus}>
        {renderAddon()}
      </form>
    </div>
  );
};

export default PerkAddon;
