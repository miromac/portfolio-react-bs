import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../styles.css';

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // The user ID is required. To find this ID, visit https://dashboard.emailjs.com/admin/integration

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Your message is delivered!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div>
    <section className="contacts">
      <div className="container">
        <div className="contactinfo">
        <div>
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span><i className="fas fa-map-marked-alt"></i></span>
              <span>00000 Address<br />
              City name, State<br />
              Zip Code
              </span>
            </li>
            <li>
              <span><i className="fas fa-envelope-open-text"></i></span>
              <span>my.mail@gmail.com</span>
            </li>
            <li>
              <span><i className="fas fa-phone-alt"></i></span>
              <span>000-000-0000</span>
            </li>
          </ul>
        </div>
        <ul className="sci">
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>
      <div className="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send a Message</h2>
        <div className="formBox">
          <div className="inputBox w50">
            <input type="text" name="from_name" id="from_name" required />
            <span>Your Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="reply_to" id="reply_to" required />
            <span>Your Email</span>
          </div>
          <div className="inputBox w100">
            <textarea name="message" id="message" required></textarea>
            <span>Write Your Message here...</span>
          </div>
          <div className="inputBox w50">
            <input type="submit" name="" id="button" value="Send" />
          </div>
        </div>
        </form>
        </div>
      </div>
    </section>
  </div>
  )
}
