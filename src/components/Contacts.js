import React from "react";
import '../styles.css';

export const Contacts = () => (
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
              <span>your.mail@gmail.com</span>
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
        <h2>Send a Message</h2>
        <div className="formBox">
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>First Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>Email Address</span>
          </div>
          <div className="inputBox w100">
            <textarea name="" required></textarea>
            <span>Write Your Message here...</span>
          </div>
          <div className="inputBox w50">
            <input type="submit" name="" value="Send" />
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
)
