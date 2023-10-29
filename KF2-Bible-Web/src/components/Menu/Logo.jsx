import React from 'react'
import logo from "../../assets/img/menu/kf2-bible-logo.svg"
import exitIcon from "../../assets/img/menu/exit-icon.svg"
const Logo = ({toggleFunction}) => {
  return (
    <li><a href="#@" ><img src={logo} alt="KF2 Bible Logo" className="logo"/></a> <img src={exitIcon} alt="" className="exit-icon" onClick={toggleFunction} /></li>
  )
}

export default Logo