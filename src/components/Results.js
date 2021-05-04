import React, { Component } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
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
        <Container
          fluid
          style={{ paddingTop: "200px", width: "100%", height: "100%", MaxWidth: '100px' }}
        >
          <CardColumns>
            <Park />
          </CardColumns>
        </Container>
      </div>
    );
  }
}
