import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
// import Instagram from "@iconscout/react-unicons/icons/uil-Instagram"
// import Facebook from "@iconscout/react-unicons/icons/uil-Facebook"
// import Github from "@iconscout/react-unicons/icons/uil-Github"

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
          {/* <Instagram color="white" size='3rem'/>
          <Facebook color="white" size='3rem'/>
          <Github color="white" size='3rem'/> */}
          <a>
          <img src={Github} alt="" />
          </a>
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />

        </div>
      </div>
    </div>  
  )
}

export default Footer