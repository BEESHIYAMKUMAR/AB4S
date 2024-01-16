import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();
    
      const SendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cqwf1jr', 'template_b8rlzej', form.current, 'RLVptYs1LmXuoikCr')
          .then((result) => {              
              alert('Sent mail to AB4S Team!');
          }, (error) => {
            alert(JSON.stringify(error));
          });
      };
  return (
    
    <section id="Contact">
    <div class="container-fluid contact" id="contact">
    <div class="container">
      <form ref={form} onSubmit={SendEmail}>
        <h2>Contact Me</h2>
        <input type="text" placeholder="Name" class="full-half" name="from_name" id="from_name"></input>
        <input type="email" placeholder="Email" id="user_email" name="user_email" class="full-half"/>
        <input type="text" placeholder="Mobile Number" id="number" name="number"/>
        <input type="text" placeholder="Subject" id="subject" name="subject"/>
        <textarea class="textarea" placeholder="Message" id="message"  name="message"></textarea>
        <input type="submit" id="button" value="Send Email" />    
          <div class="col-1">
            <div class="address-line">
              <img alt="location" src="./img/marker.png" class="icon"/>
              <div class="contact-info">
                <span class="contact-info-title">Coimbatore</span>
              </div>
              <img alt="location" src="./img/phone.png" class="icon"/>
              <div class="contact-info">
                <p class="contact-info-title">+44 7407834459</p>
              </div>
              <img alt="location" src="./img/mail.png" class="icon"/>
              <div class="contact-info">
              <p class="contact-info-title">ab4success.2023@gmail.com</p>
              </div>
            </div>
          </div>
      </form>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript">emailjs.init('RLVptYs1LmXuoikCr')</script>
    </div>
  </div>
  </section>  
  );  
}
