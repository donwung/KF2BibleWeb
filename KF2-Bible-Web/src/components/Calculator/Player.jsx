import React, { useContext } from 'react'
import {perkContext} from "./Calculator.jsx"
const Player = () => {
    const [perkModifier, setPerkModifier] = useContext(perkContext)
    // setPerkModifier([...perkModifier])
    // console.log([...perkModifier])
    const handleClick = () =>{
        let test = ['asd']
        test.push('asdddd')
        let newData = [...perkModifier]
        console.log(test)
        newData.push("raaaa")
        setPerkModifier(newData)
    }
  return (
    <div className="player">
        <button onClick={handleClick}>asd</button>
    </div>
  )
}

export default Player