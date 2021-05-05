import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import Results from "./Results";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlon: [],
      location: [],
      parks: [],
      searchQuery: "",
      lat: "",
      lon: "",
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
      this.setState({ lat: location.lat });
      this.setState({ lon: location.lon });
      this.setState({ latlon: [location.lat, location.lon] });
      this.getParks();
      this.getWeather();
    } catch (err) {
      console.log(err);
    }
  };

  getParks = async () => {
    try {
      const sendLocation = `http://localhost:3001/location?lat=${this.state.lat}&lon=${this.state.lon}}`;
      const parksResponse = await axios.get(sendLocation);
      const parks = parksResponse.data;
      this.setState({ parks: parks });
      console.log("Yo this is send location",sendLocation)
    } catch (err) {
      console.log(err);
    }
  };

  getWeather = async () => {
    const weatherKey = process.env.REACT_APP_WEATHER_KEY;
    try {
      const currentWeather = `https://api.weatherbit.io/v2.0/current?lat=46.9673768&lon=-123.7906958&key=${weatherKey}&include=minutely`;
      const response = await axios.get(currentWeather);
      const weather = response.data;
      this.setState({ weather: weather });
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
        <Results parks={this.state.parks} />
      </div>
    );
  }
}
