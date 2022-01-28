import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../styles.css';
import Slider from "./Slider";
import angular from '../pictures/angular.jpg';
import react from '../pictures/react.jpg';
import vue from '../pictures/vue.jpg';

export const Services = () => (
  <>
  <div className="slider">
    <Slider/>
  </div>
    <Container className="padforcard">
      <Row>

        <Col>
          <Card className="card">
            <Card.Img variant="top" src={angular}/>
            <Card.Body>
              <Card.Title> Full Stack development </Card.Title>
              <Card.Text>
                Front End and Back End together.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="card">
            <Card.Img variant="top" src={react}/>
            <Card.Body>
              <Card.Title> Full Stack development </Card.Title>
              <Card.Text>
                Front End and Back End together.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
    
        <Col>
          <Card className="card">
            <Card.Img variant="top" src={vue}/>
            <Card.Body>
              <Card.Title> Full Stack development </Card.Title>
              <Card.Text>
                Front End and Back End together.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
    </>
)
