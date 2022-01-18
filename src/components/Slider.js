import React from "react";
import { Carousel } from "react-bootstrap";
import angular from '../pictures/angular.jpg';
import react from '../pictures/react.jpg';
import vue from '../pictures/vue.jpg';

export default function Slider() {
  return (
    <>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={angular}
          alt="Angular"
          />
          <Carousel.Caption>
            <h3>Demo Protfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="React"
          />
          <Carousel.Caption>
            <h3>Demo Protfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vue}
          alt="Vue"
          />
          <Carousel.Caption>
            <h3>Demo Protfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
