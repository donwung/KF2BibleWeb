import React from 'react'

const PerkMenu = ({perkType}) => {
  const precision = [
    "commando",
    "support",
    "medic",
    "gunslinger",
    "sharpshooter",
    "swat"
  ];
  const chaos =['beserker','demolitionist', 'firebug', 'survivalist']
  const createList = (array) =>{
    return array.map((perk)=> <li key={`${perk}`}><a href="#!"><img className="perk-icon"src={`../src/assets/img/perk/perk-icons/${perk}-icon.svg`} alt="" /><span className="perk-name">{perk}</span></a></li>)
  }

  return (
    <>
      {perkType === "precision" ? createList(precision) : createList(chaos)}
    </>
  )
}

export default PerkMenu