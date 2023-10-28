import React from 'react'

const Logo = ({toggleFunction}) => {
  return (
    <li><a href="#@" ><img src="../src/assets/img/menu/kf2-bible-logo.svg" alt="KF2 Bible Logo" className="logo"/></a> <img src="../src/assets/img/menu/exit-icon.svg" alt="" className="exit-icon" onClick={toggleFunction} /></li>
  )
}

export default Logo