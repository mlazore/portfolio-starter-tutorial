import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import { Pagniation } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid beatae tenetur distinctio facilis non."
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga perspiciatis maiores omnis quod? Fugit"
    },
];


  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me </span>
        <div className='blur s-blur2' style={{background: "blue"}}></div>
        <div className='blur s-blur2' style={{background: "blue"}}></div>
      </div>
      {/* slider */}
      <Swiper

      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      
      >
        {clients.map((client, index)=>{
          return(
            <swiperSlide key={index}>
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </swiperSlide>
            
          )
          })}

        
      </Swiper>
    </div>
  )
}

export default Testimonials