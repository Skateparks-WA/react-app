import React, { Component } from "react";
import { CardColumns, Card, Button } from "react-bootstrap";
import Park from "./Park";
import Weather from "./Weather";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeMore: 10,
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "-115px",
          paddingBottom: "10%",
          width: "100%",
          height: "100%",
          backgroundColor: "#e4e4e4",
        }}
      >
        <div
          style={{
            paddingTop: "200px",
            maxWidth: "80%",
            minWidth: "90%",
            margin: "auto",
          }}
        >

          {this.props.parks.length > 1 && <Weather weather={this.props.weather} />}
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body style={{ backgroundColor: "#eeeeee" }}>
              {this.props.parks.length < 1 && (
                <>
                  <Card.Title>See all parks Available</Card.Title>
                  <Card.Text>Then filter your results based on tags</Card.Text>
                  <Button variant="primary">All Parks</Button>
                </>
              )}
              <Park parks={this.props.parks} seeMore={this.state.seeMore} />
            </Card.Body>
            <Card.Footer>
              {" "}
              {this.props.parks.length > 1 && (
                <Button
                  onClick={() =>
                    this.setState({ seeMore: this.state.seeMore + 10 })
                  }
                  style={{ margin: "auto", display: "block" }}
                >
                  See More
                </Button>
              )}
            </Card.Footer>
          </Card>

          <CardDeck>
            <Park parks={this.props.parks} 
            seeMore={this.state.seeMore}
            covered={this.props.covered} />
          </CardDeck>

        </div>
      </div>
    );
  }
}
