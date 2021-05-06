import React, { Component } from "react";
import { CardColumns, CardDeck } from "react-bootstrap";
import Park from "./Park";

export default class Results extends Component {
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
          
            <Park parks={this.props.parks} />
          
        </div>
      </div>
    );
  }
}
