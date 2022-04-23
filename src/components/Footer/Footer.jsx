import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"

import Instagram from "../../img/instagram.png"
import Facebook from "../../img/Facebook.png"
import Github from "../../img/github.png"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width: "100%"}} />
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <img src={Github} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />

        </div>
      </div>
    </div>  
  )
}

export default Footer