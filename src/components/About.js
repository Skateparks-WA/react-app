import React, { Component } from "react";
import { Jumbotron, Button, Col, Image, Row, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import tek from "../assets/img/tek.png";

export default class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#e4e4e4', paddingBottom: '20%'}}>
        <Navbar />
        <Container style={{ marginTop: "160px" }}>
          <Row>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron style={{backgroundColor: '#ffffff', marginTop: "60px" }}>
                <h1>Tek Jones</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row style={{ marginTop: "90px" }}>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron style={{backgroundColor: '#ffffff', marginTop: "60px" }}>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row style={{ marginTop: "90px" }}>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron style={{backgroundColor: '#ffffff', marginTop: "60px" }}>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row style={{ marginTop: "90px",}}>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron style={{backgroundColor: '#ffffff', marginTop: "60px" }}>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
