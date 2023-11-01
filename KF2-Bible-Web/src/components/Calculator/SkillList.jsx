import React, { useContext, useEffect } from "react";
import "../../styles/calculator/skills.scss";
import Skill from "./Skill";

import { perkContext, lvlContext, skillContext } from "./Calculator";
const SkillList = () => {
  // Context
  const [lvl, setLvl] = useContext(lvlContext);
  const [perkObject, setPerkObject] = useContext(perkContext);
  const [skillsObject, setSkillsObject] = useContext(skillContext);
  // Getter;
  const getSkills = (tier) => {
    let obj = JSON.parse(perkObject);
    return obj.skills[`lvl-${tier}`];
  };
  // Render
  const renderList = () => {
    let i = 5;
    let skillArray = [];
    while (i <= lvl) {
      skillArray.push(<Skill perkTier={i} skills={getSkills(i)} key={i} />);
      i += 5;
    }
    return skillArray;
  };
  // Handles
  // Called in Use Effect, resets skills state on lvl or perk change
  const handleDefault = () => {
    let copy = {};
    let i = 5;
    while (i <= lvl) {
      let skillCopy = getSkills(i);
      if (skillCopy.left.default) {
        copy[`lvl-${i}`] = [
          skillCopy.left["skill-name"],
          skillCopy.left["damage-modifier"],
        ];
      } else {
        copy[`lvl-${i}`] = [
          skillCopy.right["skill-name"],
          skillCopy.right["damage-modifier"],
        ];
      }
      i += 5;
    }
    setSkillsObject(JSON.stringify(copy));
  };
  const handleLvl = () => {
    let copy = JSON.parse(skillsObject);
    let newSkills = {};
    let i = 5;
    while (i <= lvl) {
      if (copy.hasOwnProperty(`lvl-${i}`)) {
        newSkills[`lvl-${i}`] = copy[`lvl-${i}`];
      } else {
        let skillCopy = getSkills(i);
        if (skillCopy.left.default) {
          newSkills[`lvl-${i}`] = [
            skillCopy.left["skill-name"],
            skillCopy.left["damage-modifier"],
          ];
        } else {
          newSkills[`lvl-${i}`] = [
            skillCopy.right["skill-name"],
            skillCopy.right["damage-modifier"],
          ];
        }
      }
      i += 5;
    }
    setSkillsObject(JSON.stringify(newSkills));
  };
  // Changes value of tier in skills state
  const handleSkill = (event) => {
    let copy = JSON.parse(skillsObject);
    copy[`${event.target.name}`] = event.target.value;
    setSkillsObject(JSON.stringify(copy));
  };
  // useEffect
  useEffect(() => {
    handleDefault();
  }, [perkObject]);
  useEffect(() => {
    handleLvl();
  }, [lvl]);
  return (
    <div className="skills-container">
      <form
        action=""
        onChange={(event) => {
          handleSkill(event);
        }}
      >
        {renderList()}
      </form>
    </div>
  );
};

export default SkillList;
