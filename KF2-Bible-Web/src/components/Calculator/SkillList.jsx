import React, { useContext } from "react";
import "../../styles/calculator/skills.scss";
import Skill from "./Skill"

import { perkContext, lvlContext } from "./Calculator";
const SkillList = () => {
  // Context
  const [perkObject, setPerkObject] = useContext(perkContext);
  const [lvl, setLvl] = useContext(lvlContext);
  // Getter
  const getSkills = (tier) => {
    let obj = JSON.parse(perkObject);
    return obj.skills[`lvl-${tier}`]
  };
  // Render
  const renderList=()=>{
    let i = 5
    let skillArray = []
    while (i <= lvl){
      skillArray.push(<Skill perkTier={i} skills={getSkills(i)}/>)
      i +=5
    }
    return skillArray
  }

  return (
    <div className="skills-container">
        {/* <Skill perkTier={25} skills={getSkills(25)}/> */}
        {renderList()}
    </div>
  );
};

export default SkillList;
