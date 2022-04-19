import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi I Am</span>
          <span>Martin</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis reprehenderit unde magnam, rem qui vel enim quod ad autem atque ex delectus iure fuga harum earum asperiores? Ullam, molestiae?</span>
        </div>
        <button className="button i-button">Hire me</button>
      </div>
      
      <div className="i-right">
        I am the right side
      </div>

    </div>
  )
}

export default Intro