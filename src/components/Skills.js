import React from "react";
import { Container, Table, ProgressBar } from "react-bootstrap";
import '../styles.css';

export const Skills = () => (
  <Container className="skills">
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th></th>
      <th>Technology</th>
      <th>Progress of knowledge</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Html</td>
      <td><ProgressBar now={81} label='81%' variant="success"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Css</td>
      <td><ProgressBar now={77} label='77%' variant="success"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Javascript</td>
      <td><ProgressBar now={66} label='66%' variant="success"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Sql</td>
      <td><ProgressBar now={49} label='49%' variant="info"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Git</td>
      <td><ProgressBar now={49} label='49%' variant="info"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Angular</td>
      <td><ProgressBar now={45} label='45%' variant="info"/></td>
    </tr>
    <tr>
      <td></td>
      <td>React</td>
      <td><ProgressBar now={44} label='44%' variant="info"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Vue</td>
      <td><ProgressBar now={43} label='43%' variant="info"/></td>
    </tr>
    <tr>
      <td></td>
      <td>C#</td>
      <td><ProgressBar now={39} label='39%' variant="warning"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Java</td>
      <td><ProgressBar now={30} label='30%' variant="warning"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Php</td>
      <td><ProgressBar now={30} label='30%' variant="warning"/></td>
    </tr>
    <tr>
      <td></td>
      <td>C++</td>
      <td><ProgressBar now={29} label='29%' variant="danger"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Python</td>
      <td><ProgressBar now={25} label='25%' variant="danger"/></td>
    </tr>
    <tr>
      <td></td>
      <td>Swift</td>
      <td><ProgressBar now={15} label='15%' variant="danger"/></td>
    </tr>
  </tbody>
</Table>
</Container>
)
