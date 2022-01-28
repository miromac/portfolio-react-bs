import React from "react";
import '../styles.css';
import img from '../pictures/img.png';
import { Container, Image } from "react-bootstrap";

export const Home = () => (
  <div>
    {/* <h1 className="c-mt-20">Home Page</h1> */}
    {/* <!-- Loading Animation --> */}
    <div>
      <section className="home">
        <div className="infoBx">
          <h1><span>Hi,</span><br />
            I am Junior <br />
          Full Stack Developer
          </h1>
          <a href="#">Hire me</a>
        </div>
        <div className="imgBx">
          <Image src={img} alt="img"></Image>
        </div>
      </section>
    </div>
  </div>
)
