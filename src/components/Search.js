import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import Results from "./Results";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      parks: [],
      searchQuery: "",
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const locationKey = process.env.REACT_APP_LOCATION_IQ_KEY;
    try {
      const backendParks = `https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(backendParks);
      const location = response.data[0];
      this.setState({ location: location });
      console.log("the is the location response", this.state.location);
      this.getParks()
    } catch (err) {
      console.log(err);
    }
  };

  getParks = async () => {
    try {
      const sendLocation = `http://localhost:3001/location?searchQuery=${this.state.location}`;
      const parksResponse = await axios.get(sendLocation);
      const parks = parksResponse.data;
      this.setState({ parks: parks });
      console.log("the is the parks response", this.state.parks);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Card
          text="light"
          className="search-card"
          style={{ marginTop: "-100px" }}
        >
          <Card.Header>❤️🛹</Card.Header>
          <Card.Body>
            <Card.Title>Search Skate Parks</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content. {this.state.searchQuery}
            </Card.Text>
            <Form role="form" onSubmit={this.getLocation}>
              <Form.Row className="align-items-center">
                <Col className="my-1">
                  <Form.Label htmlFor="inlineFormInputName" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Skate or Die"
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
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
