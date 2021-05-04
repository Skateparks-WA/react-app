import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import Results from './Results';
import axios from "axios";


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      searchQuery: ""
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      const backendParks = `http://localhost:3001/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(backendParks);
      const parks = response.data;
      this.setState({ parks: parks });
      console.log("the is the location response", this.state.parks);
    } catch (err) {
      console.log(err);
    }
  };

  // getParks = async () => {
  //   try {
  //     const backendMovies = `http://localhost:3001/parks`;
  //     const response = await axios.get(backendMovies);
  //     const movies = response.data;
  //     this.setState({ movies: movies });
  //     console.log("the is the movies response", this.state.movies);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



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
              content. {this.state.searchQuery}
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
