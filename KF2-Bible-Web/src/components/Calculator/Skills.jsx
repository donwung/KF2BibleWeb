import React, { useContext } from "react";
import "../../styles/calculator/skills.scss";
import { perkContext, lvlContext } from "./Calculator";
const Skills = () => {
  // Context
  const [perkObject, setPerkObject] = useContext(perkContext);
  const [lvl, setLvl] = useContext(lvlContext);
  // Getter
  const getSkills = () => {
    let skillsArray = [];
    let obj = JSON.parse(perkObject);
    let tiers = Object.keys(obj.skills);
    tiers.forEach((tier) => {
      skillsArray.push(obj.skills[tier].left, obj.skills[tier].right);
    });
    console.log(skillsArray);
    // return JSON.stringify(skillsArray);
  };
  // Render
  // const renderSkills = (data) => {
  //   let skills = JSON.parse(data);
  //   let select = [];
  //   for (let i = 0; i < 10; i += 2) {
  //     let dropdown = `<option value='${skills[i]["damage-modifier"]}' ${
  //       skills[i]["default"] ? "default" : ""
  //     }>${skills[i]["skill-name"]}</option>`;
  //     select.push(dropdown);
  //   }
  //   console.log(select);
  // };

  return (
    <div className="skills-container">
      <div className="skill">
        <h3>Sniper</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor="lvl-5-left">
            <input type="radio" name="lvl-5" id="lvl-5-left" value={0.25} />
            <img src="./sharpshooter/left-lvl-5.webp" alt="Assassin" />
            <p className="hidden left">
              Movement Sniper 5 Marksman Increase damage 25% while stationary
              and using perk weapons.
            </p>
          </label>
          {/* Right */}
          <label htmlFor="lvl-5-right">
            <input type="radio" name="lvl-5" id="lvl-5-right" value={0.25} />
            <img src="./sharpshooter/right-lvl-5.webp" alt="Assassin" />
            <p className="hidden right">
              Increase shooting speed by 25% and movement speed by 10% when
              using perk weapons.
            </p>
          </label>
        </div>
      </div>
      <div className="skill">
        <h3>Sniper</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor="lvl-5-left">
            <input type="radio" name="lvl-5" id="lvl-5-left" value={0.25} />
            <img src="./sharpshooter/left-lvl-5.webp" alt="Assassin" />
            <p className="hidden left">
              Movement Sniper 5 Marksman Increase damage 25% while stationary
              and using perk weapons.
            </p>
          </label>
          {/* Right */}
          <label htmlFor="lvl-5-right">
            <input type="radio" name="lvl-5" id="lvl-5-right" value={0.25} />
            <img src="./sharpshooter/right-lvl-5.webp" alt="Assassin" />
            <p className="hidden right">
              Increase shooting speed by 25% and movement speed by 10% when
              using perk weapons.
            </p>
          </label>
        </div>
      </div>
      <div className="skill">
        <h3>Sniper</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor="lvl-5-left">
            <input type="radio" name="lvl-5" id="lvl-5-left" value={0.25} />
            <img src="./sharpshooter/left-lvl-5.webp" alt="Assassin" />
            <p className="hidden left">
              Movement Sniper 5 Marksman Increase damage 25% while stationary
              and using perk weapons.
            </p>
          </label>
          {/* Right */}
          <label htmlFor="lvl-5-right">
            <input type="radio" name="lvl-5" id="lvl-5-right" value={0.25} />
            <img src="./sharpshooter/right-lvl-5.webp" alt="Assassin" />
            <p className="hidden right">
              Increase shooting speed by 25% and movement speed by 10% when
              using perk weapons.
            </p>
          </label>
        </div>
      </div>
      <div className="skill">
        <h3>Sniper</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor="lvl-5-left">
            <input type="radio" name="lvl-5" id="lvl-5-left" value={0.25} />
            <img src="./sharpshooter/left-lvl-5.webp" alt="Assassin" />
            <p className="hidden left">
              Movement Sniper 5 Marksman Increase damage 25% while stationary
              and using perk weapons.
            </p>
          </label>
          {/* Right */}
          <label htmlFor="lvl-5-right">
            <input type="radio" name="lvl-5" id="lvl-5-right" value={0.25} />
            <img src="./sharpshooter/right-lvl-5.webp" alt="Assassin" />
            <p className="hidden right">
              Increase shooting speed by 25% and movement speed by 10% when
              using perk weapons.
            </p>
          </label>
        </div>
      </div>
      <div className="skill">
        <h3>Sniper</h3>
        <div className="radio">
          {/* Left */}
          <label htmlFor="lvl-5-left">
            <input type="radio" name="lvl-5" id="lvl-5-left" value={0.25} />
            <img src="./sharpshooter/left-lvl-5.webp" alt="Assassin" />
            <p className="hidden left">
              Movement Sniper 5 Marksman Increase damage 25% while stationary
              and using perk weapons.
            </p>
          </label>
          {/* Right */}
          <label htmlFor="lvl-5-right">
            <input type="radio" name="lvl-5" id="lvl-5-right" value={0.25} />
            <img src="./sharpshooter/right-lvl-5.webp" alt="Assassin" />
            <p className="hidden right">
              Increase shooting speed by 25% and movement speed by 10% when
              using perk weapons.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Skills;
