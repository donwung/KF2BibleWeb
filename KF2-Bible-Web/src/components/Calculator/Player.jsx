import React, { useContext } from 'react'
import {perkContext} from "./Calculator.jsx"
import perks from "../../assets/data/perks.json"
const Player = () => {
    // Perk Modifier Context
    const [perkModifier, setPerkModifier] = useContext(perkContext)
    const perkDropdown = perks.map((perk)=>{
      return <option value={perk} key={perk.name}>{perk.name}</option>
    })
  return (
    <div className="player">
        <select name="" id="" >
          {perkDropdown}
        </select>
    </div>
  )
}

export default Player