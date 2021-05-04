import React, { Component } from "react";
import { Jumbotron, Button, Col, Image,Row, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import tek from '../assets/img/100pxHeadshot.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>

        <div>
          <Row>
          <Col xs={6} md={7}>
            <Image src={tek} roundedCircle />
          </Col>
          <div>
            <Col xs={6} md={7}>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </div>

          </Row>
        </div>
        </Container>
      </div>
    );
  }
}
