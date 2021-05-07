import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  Col
 
} from "react-bootstrap";
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
      weather: "",
      weatherDay: [],
      covered: false,
    };
  }

  filterCovered = () => {
    if (this.state.covered === false) {
      this.setState({ covered: true });
    } else if (this.state.covered === true) {
      this.setState({ covered: false });
    }
  };

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
      this.getWeatherCurrent();
      this.getWeatherDay();
    } catch (err) {
      console.log(err);
    }
  };

  getParks = async () => {
    try {
      const sendLocation = `https://skate-wa-server.herokuapp.com/location?lat=${this.state.lat}&lon=${this.state.lon}`;
      const parksResponse = await axios.get(sendLocation);
      const parks = parksResponse.data;
      this.setState({ parks: parks });
    } catch (err) {
      console.log(err);
    }
  };

  getWeatherCurrent = async () => {
    const weatherKey = process.env.REACT_APP_WEATHER_KEY;
    try {
      const currentWeather = `https://api.weatherbit.io/v2.0/current?lat=${this.state.lat}&lon=${this.state.lon}&key=${weatherKey}&include=minutely`;
      const response = await axios.get(currentWeather);
      const weather = response.data.data[0].weather.description;
      this.setState({ weather: weather });
      
    } catch (err) {
      console.log(err);
    }
  };

  getWeatherDay = async () => {
    const weatherKey = process.env.REACT_APP_WEATHER_KEY;
    try {
      const currentWeather = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.state.lat}&lon=${this.state.lon}&key=${weatherKey}`;
      const response = await axios.get(currentWeather);
      const weatherDay = response.data.data[0].weather.description;
      this.setState({ weatherDay: weatherDay });
      console.log("Yo this is weather", this.state.weatherDay);
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
              Find and filter skate parks nearest your address or city. Click in on each park to find more info
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
              <Form.Check
                inline
                type="checkbox"
                label="Covered"
                onChange={this.filterCovered}
              />
            </Form>
          </Card.Body>
        </Card>

        <Results
          parks={this.state.parks}
          weather={this.state.weather}
          weatherDay={this.state.weatherDay}
          covered={this.state.covered}
        />
      </div>
    );
  }
}
