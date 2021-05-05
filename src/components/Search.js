import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import Results from "./Results";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      parks: [{"_id":{"$oid":"609210af43d73f609cc66fd8"},"name":"Aberdeen","street_address":"E Perry St & S Dewey St.","city":"Aberdeen","state":"WA","zip":"98520","full_address":"E Perry St & S Dewey St. Aberdeen, WA 98520","latitude":{"$numberDouble":"46.9673768"},"longitude":{"$numberDouble":"-123.7906958"},"concat":"46.9673768,-123.7906958","native_land":"Coast Salish, Chehalis","tags":null,"bowl":null,"rails":null,"ledges":null,"rain_cover":true,"night_light":false,"difficulty":9,"crust_level":3,"public_bathroom":true,"diy":true}],
      searchQuery: "",
      weather: "",
      lat: "",
      lon: ""
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
      this.setState({lat:location.lat})
      this.setState({lon:location.lon})
      console.log('this is the lon',this.state.lon)
      console.log("the is the location response", this.state.location);
      this.getWeather()
    } catch (err) {
      console.log(err);
    }
  };


  getWeather = async () => {
    const weatherKey = process.env.REACT_APP_WEATHER_KEY;
    try {
      const currentWeather = `https://api.weatherbit.io/v2.0/current?lat=${this.state.lat}&lon=${this.state.lon}&key=${weatherKey}&include=minutely`;
      const response = await axios.get(currentWeather);
      const weather = response.data;
      this.setState({ weather: weather });
      console.log(this.state.weather)
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
