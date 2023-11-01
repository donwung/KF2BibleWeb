import React, { useContext } from 'react'
import { focusContext } from './Calculator'

const PerkAddon = () => {
    const [focus, setFocus] = useContext(focusContext)
  return (
    <div className="addon-container">
        <div className="addon">
            
        </div>
    </div>
  )
}

export default PerkAddon