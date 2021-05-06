import React, { Component } from "react";
import { Jumbotron, Button, Col, Image, Row, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import tek from "../assets/img/tek.png";

export default class About extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <Container style={{ marginTop: "160px" }}>
          <Row>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron className="team-jumbo">
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
              <Jumbotron
                className="team-jumbo"
              >
                <h1>Daniel Haugen</h1>
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
              <Jumbotron
                className="team-jumbo"
              >
                <h1>Kyle Hoac</h1>
                <p>
                Hi, my name is Kyle Hoac and before enrolling at Code Fellows I was previously working in the sales industry. I've always wanted to learn how to write code as a kid, and in terms of a career, software development is one of the only fields that I’m genuinely interested in. Coming from the sales industry, I've had the pleasure of working with many different types of people coming from all different backgrounds, and I believe my previous experiences have only honed my ability to work with people individually, as well as work in a group environment. Some of my hobbies include music production, dominating opposing teams in video games, and traveling.
                </p>
                <p>
                  <Button variant="primary" href="https://github.com/kylehoac">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row style={{ marginTop: "90px" }}>
            <Col xs={6} md={4}>
              <Image src={tek} rounded />
            </Col>
            <Col xs={6} md={8}>
              <Jumbotron
                className="team-jumbo"
              >
                <h1>Timothy Viccari</h1>
                <p>
                Before enrolling in Code Fellows I spent the past decade in the insurance industry working for large insurers and brokers as well as a couple of insurance focused startups. I had been interested in learning to code for a number of years but was in a career that was tough to leave. As is the case with many people though 2020 was a year of reflection and changing priorities so I decided to go full steam ahead with software development. Once I finish Code Fellows I am hoping to use my newly acquired skills to make rad software - or maybe finance/insurance software - which is decidedly less rad - but still pretty awesome to me.
                </p>
                <p>
                  <Button variant="primary" href="https://github.com/everydaytimmy">Git Hub</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
