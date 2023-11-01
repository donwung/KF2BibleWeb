import React, { useContext } from "react";
import { perkContext } from "./Calculator";

const Skill = ({perkTier, skills}) => {
    const [perkObject, setPerkObject] = useContext(perkContext)
    const renderSkills=()=>{
        return <div className="skill" key={`skills-${JSON.parse(perkObject).name}`}>
        <h3>{skills["tier-name"]}</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor={`lvl-${perkTier}-left`}>
            <input
              type="radio"
              name={`lvl-${perkTier}`}
              id={`lvl-${perkTier}-left`}
              value={`ADD VALUE`}
            defaultChecked={skills.left.default}
            />
            <img src={`./${JSON.parse(perkObject).name}/left-lvl-${perkTier}.webp`} alt="SKILLNAME" />
            <p className="perk-title left">{skills.left["skill-name"]}</p>
            <p className="hidden left">{skills.left.description}</p>
          </label>
          {/* Right */}
          <label htmlFor={`lvl-${perkTier}-right`}>
            <input
              type="radio"
              name={`lvl-${perkTier}`}
              id={`lvl-${perkTier}-right`}
              value={`ADD VALUE`}
              defaultChecked={skills.right.default}
            />
            <img src={`./${JSON.parse(perkObject).name}/right-lvl-${perkTier}.webp`} alt="SKILLNAME" />
            <p className="perk-title right">{skills.right["skill-name"]}</p>
            <p className="hidden right">{skills.right.description}</p>
          </label>
        </div>
    </div>
        
    }
  return (
    <>
        {renderSkills()}
    </>
  );
};

export default Skill;
