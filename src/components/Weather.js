import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <Container style={{marginBottom: '60px'}}>
          
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">Current Forcast</Card.Header>
                  <Card.Body>
                    <Card.Text>
                     <b>weather: </b> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header as="h5">Day Forcast</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          
        </Container>
      </div>
    );
  }
}
