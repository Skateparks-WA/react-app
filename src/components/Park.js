import React, { Component } from "react";
import { Card } from "react-bootstrap";
import MyModal from "./Mymodal";
import image2 from "../assets/img/venice-skate.jpg";
import image3 from "../assets/img/beachskate.jpg";
import image1 from "../assets/img/skater.jpg";

export default class Park extends Component {
  render() {
    return (
      <div>
        <Card onClick={this.addFavorite}>
          <Card.Img src={image1}></Card.Img>
          <Card.Body>
            <Card.Title>Lake Forest Park </Card.Title>
            <Card.Text>Miles Away: 3.5 </Card.Text>
            <Card.Text>😍 </Card.Text>
            <MyModal />
          </Card.Body>
        </Card>
        <Card onClick={this.addFavorite}>
          <Card.Img src={image2}></Card.Img>
          <Card.Body>
            <Card.Title>Lake Forest Park </Card.Title>
            <Card.Text>Miles Away: 3.5 </Card.Text>
            <Card.Text></Card.Text>
            <MyModal />
          </Card.Body>
        </Card>
        <Card onClick={this.addFavorite}>
          <Card.Img src={image3}></Card.Img>
          <Card.Body>
            <Card.Title>Lake Forest Park </Card.Title>
            <Card.Text>Miles Away: 3.5 </Card.Text>
            <Card.Text>😍</Card.Text>
            <MyModal />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
