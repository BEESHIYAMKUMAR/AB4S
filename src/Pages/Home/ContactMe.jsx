export default function ContactMe() {
  return (
    
  <section id="Contact">
     <div class="container-fluid contact" id="contact">
    <div class="container">
      <form>
        <h2>Contact Me</h2>
        <input type="text" placeholder="Name" id="name" name="name" class="full-half"/>
        <input type="email" placeholder="Email" id="email" name="email" class="full-half"/>
        <input type="text" placeholder="Mobile Number" id="number" name="number"/>
        <input type="text" placeholder="Subject" id="subject" name="subject"/>
        <textarea class="textarea" placeholder="Message" id="message"  name="message"></textarea>
        <input type="submit" value="Send"/>     
          <div class="col-1">
            <div class="address-line">
              <img alt="location" src="./img/marker.png" class="icon"/>
              <div class="contact-info">
                <span class="contact-info-title">Chennai</span>
              </div>
              <img alt="location" src="./img/phone.png" class="icon"/>
              <div class="contact-info">
                <p class="contact-info-title">91-9999999999</p>
              </div>
              <img alt="location" src="./img/mail.png" class="icon"/>
              <div class="contact-info">
              <p class="contact-info-title">ab4success.2023@gmail.com</p>
              </div>
            </div>
          </div>
      </form>
    </div>
  </div>
  </section>
  );
}
