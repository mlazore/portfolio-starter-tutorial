import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';


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
       <button className="button s-button">Download CV</button>
       <div className='blur s-blur1' style={{ background: '#ABF1FF94'}}></div>
      </div>

      {/* right side */}
      <div className="cards">

        <div>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"REACT, HTML. CSS, JS, MySql"}

          />
        </div>
      </div>
    </div>
  )
}

export default Services