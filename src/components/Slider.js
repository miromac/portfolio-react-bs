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
        <div style={{paddingBottom: '20px'}}>
          <img
            className="d-block w-100"
            src={angular}
            alt="Angular"
            />
        </div>
          <Carousel.Caption>
            <h3>Demo Portfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{paddingBottom: '20px'}}>
          <img
            className="d-block w-100"
            src={react}
            alt="React"
            />
        </div>
          <Carousel.Caption>
            <h3>Demo Portfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{paddingBottom: '20px'}}>
          <img
            className="d-block w-100"
            src={vue}
            alt="Vue"
            />
        </div>
          <Carousel.Caption>
            <h3>Demo Portfolio</h3>
            <p>Let&rsquo;s discover new technologis for you</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
