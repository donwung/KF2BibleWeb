import React from 'react'

const PerkMenu = ({perkName}) => {
  return (
    <li><a href="#!"><img src={`../src/assets/img/perk/perk-icons/${perkName}-icon.svg`} alt="" /><span className={perkName}>{perkName}</span></a></li>
  )
}

export default PerkMenu