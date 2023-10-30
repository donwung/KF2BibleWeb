import React, {  createContext, useState } from 'react'
import Player from './Player'
import { useContext } from 'react'
export const perkContext = createContext();

const Calculator = () => {
    const [perkModifier, setPerkModifier] = useState([1,2,3]) 

    return (
    
    <div className="container">
        <perkContext.Provider value={[perkModifier, setPerkModifier]}>
        <Player/>
        </perkContext.Provider>
    </div>
  )
}

export default Calculator