import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
// import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">

      {/* left side */}
      <div className="awesome">
      <span>My Awesome</span>
      <span>Services</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/>
       Iure maxime iusto repellendus debitis mollitia. Expedita!</span>

       {/* <a href={Resume} download> */}
       <button className="button s-button">Download CV</button>
       {/* </a> */}
       <div className='blur s-blur1' style={{ background: '#ABF1FF94'}}></div>
      </div>

      {/* right side */}
      <div className="cards">

        <div style={{left: '14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"REACT, HTML. CSS, JS, MySql"}

          />
        </div>
            {/* second card */}
          <div style={{top: '12rem', left: '-4rem'}}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Full stack web developer"}
            />
          </div>
          {/* 3rd card */}
          <div style={{top:'19rem', left: '12rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={"UI/UX"}
            detail={"lorem ispim edummy text for demo"}
            />
          </div>
         <div className='blur s-blur2' style={{background: "blue"}}>

         </div>
      </div>
    </div>
  )
}

export default Services