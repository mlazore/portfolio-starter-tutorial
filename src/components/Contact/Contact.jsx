import React from 'react'
import './Contact.css'
// import emailjs from '@emailjs/browser';

// import { useRef } from "react";
const Contact = () => {
  //   const form = useRef();

      // const [done, setDone] =useState(false)


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ifss00x', 'template_rko77pg', form.current, '0Q0y34D6sB5C1V8sE')
  //     .then((result) => {
  //         console.log(result.text);
              // setDone(true);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };


  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>

          <div
         className='blur t-blur1' style={{background: "blue"}}>

         </div>
        </div>
      </div>

      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form>
          <input type="text" name="user_name" className='user' placeholder="Name"/>
          <input type="Email" name="user_email" className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Message'/>
          <input type="submit" value="Send" className='button'/>

          {/* <span>{done && "Thanks for contacting me"}</span> */}

          <div className="blur c-blur1"
            style={{background: "purple"}}>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact