import React, { Component } from "react";
import { Card } from "react-bootstrap";
import MyModal from "./Mymodal";
import image2 from "../assets/img/venice-skate.jpg";
import image3 from "../assets/img/beachskate.jpg";
import image1 from "../assets/img/skater.jpg";

export default class Park extends Component {
  render() {
    console.log("yooooooo", this.props.parks);
    const parks = this.props.parks;
    return (
      <div>
        <Card onClick={this.addFavorite}>
          <Card.Img src={image1}></Card.Img>
          <Card.Body>
            <Card.Title>{parks[0].name} Park</Card.Title>
            <Card.Text>
              <b>Native Lands:</b> {parks[0].native_land}
            </Card.Text>
            <Card.Text>😍|🚻|☔|💡 </Card.Text>
            <MyModal
              name={parks[0].name}
              nativeLand={parks[0].native_land}
              city={parks[0].city}
              fullAddy={parks[0].full_address}
              diff={parks[0].difficulty}
              custLevel={parks[0].crust_level}
              diy={parks[0].diy}
              rain={parks[0].rain_cover}
              bathRoom={parks[0].public_bathroom}
              light={parks[0].night_light}
            />
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
          <Card.Img src={image1}></Card.Img>
          <Card.Body>
            <Card.Title>Lake Forest Park </Card.Title>
            <Card.Text>Miles Away: 3.5 </Card.Text>
            <Card.Text>😍 </Card.Text>
            <MyModal />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
