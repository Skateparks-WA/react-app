import React, { Component } from "react";
import { Card, Button, Form, Col,InputGroup, FormControl } from "react-bootstrap";
import Results from './Results';
import axios from "axios";


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      searchQuery: ""
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      const backendLocation = `http://localhost:3001/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(backendLocation);
      const location = response.data;
      this.setState({ location: location });
      console.log("the is the location response", this.state.locations);
    } catch (err) {
      console.log(err);
    }
  };



  render() {
    return (
      <div>
        <Card
          text="light"
          style={{
            backgroundColor: "#0d4086",
            maxWidth: 650,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: -100,
          }}
        >
          <Card.Header>Skate WA</Card.Header>
          <Card.Body>
            <Card.Title>Search Skate Parks</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Form  role="form" onSubmit={this.getLocation}>
              <Form.Row className="align-items-center">
                <Col className="my-1">
                  <Form.Label htmlFor="inlineFormInputName" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Skate or Die"
                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                  />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <Results />


      </div>
    );
  }
}
