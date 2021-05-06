import React, { Component } from "react";
import { CardColumns, CardDeck, Button } from "react-bootstrap";
import Park from "./Park";

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
          width: "100%",
          height: "100vh",
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

          <CardDeck>
          
            <Park 
            parks={this.props.parks}
            seeMore={this.state.seeMore} />

            </CardDeck>

        </div>
        <Button onClick={() => this.setState({ seeMore: this.state.seeMore + 10 })}>
          See More
        </Button>
      </div>
    );
  }
}
