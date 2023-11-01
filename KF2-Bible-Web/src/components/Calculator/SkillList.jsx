import React, { useContext } from "react";
import "../../styles/calculator/skills.scss";
import Skill from "./Skill"

import { perkContext, lvlContext } from "./Calculator";
const SkillList = () => {
  // Context
  const [lvl, setLvl] = useContext(lvlContext);
  const [perkObject, setPerkObject] = useContext(perkContext)
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
      skillArray.push(<Skill perkTier={i} skills={getSkills(i)} key={i} />)
      i +=5
    }
    return skillArray
  }
  // Handles
  const handleSkill = (event) =>{
    console.log(event)
  }
  return (
    <div className="skills-container">
      <form action="" onChange={(event)=>{
        handleSkill(event)
      }}>
        {renderList()}
      </form>
    </div>
  );
};

export default SkillList;
