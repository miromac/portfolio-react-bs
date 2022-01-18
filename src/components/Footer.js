import React from "react";
import '../styles.css';
import { Container } from "react-bootstrap";

export const Footer = () => (
  <Container fluid style={{backgroundColor: '#212121', color: '#FFF'}}>
    <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
      <p>Footer Portfolio Demo</p>
    </Container>
  </Container>
)
