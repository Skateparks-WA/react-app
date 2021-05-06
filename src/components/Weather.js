import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class Weather extends Component {
  render() {
    
    return (
      <div>
        
        <Container style={{marginBottom: '60px'}}>
          
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">Current Weather</Card.Header>
                  <Card.Body>
                    <Card.Text>
                     <b>Weather: </b> {this.props.weather}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header as="h5">Day Forcast</Card.Header>
                  <Card.Body>
                    
                    <Card.Text>
                      <b>Weather: </b> {this.props.weatherDay}
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
