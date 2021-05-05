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
            <Card.Title>{this.props.parks[0].name} Park</Card.Title>
            <Card.Text>
              <b>Native Lands:</b> {this.props.parks[0].native_land}
            </Card.Text>
            <Card.Text>
              <b>Miles Away: </b> 3.2
            </Card.Text>
            <Card.Text>😍|🚻|☔|💡 </Card.Text>
            <MyModal
              parks={this.props.parks} 
            />
          </Card.Body>
        </Card>
        
      </div>
    );
  }
}
