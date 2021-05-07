import React, { Component } from "react";
import { Card, CardDeck, Container, Row } from "react-bootstrap";
import MyModal from "./Mymodal";
import imageArr from "../images.json"


export default class Park extends Component {
  render() {
      console.log(imageArr)
    return (
      <>

        <Container fluid>
          <Row>
            <CardDeck>
         {this.props.covered === false ? 
        this.props.parks.slice(0, this.props.seeMore).map((parks, index) => {
          return (
            <Card
              style={{ minWidth: "18em", maxWidth: "18em", marginBottom:"5%"}}
              onClick={this.addFavorite}
              key={index}
            >
              <Card.Img src={`/img/${imageArr[index%imageArr.length]}`}></Card.Img>
              <Card.Body>
                <Card.Title>{parks.name} Park</Card.Title>
                <Card.Text>
                  <b>Native Lands:</b> {parks.native_land}
                </Card.Text>
                <Card.Text>
                  <b>Miles Away: </b> {parks.distance.toFixed(2)}
                </Card.Text>
                <Card.Text>😍|🚻|☔|💡|🛠️ </Card.Text>
                <MyModal parks={parks} index={index} />
              </Card.Body>
            </Card>
          );
        }) : this.props.parks.filter(parks => parks.rain_cover === true).slice(0, this.props.seeMore).map((parks, index) => {
          return (
            <Card
              style={{ minWidth: "18em", maxWidth: "18em", marginBottom:"5%"}}
              onClick={this.addFavorite}
            >
              <Card.Img src={`/img/${imageArr[index%imageArr.length]}`}></Card.Img>
              <Card.Body>
                <Card.Title>{parks.name} Park</Card.Title>
                <Card.Text>
                  <b>Native Lands:</b> {parks.native_land}
                </Card.Text>
                <Card.Text>
                  <b>Miles Away: </b> {parks.distance.toFixed(2)}
                </Card.Text>
                <Card.Text>😍|🚻|☔|💡|🛠️ </Card.Text>
                <MyModal parks={parks} index={index} />
              </Card.Body>
            </Card>
          );
        })}
 
            </CardDeck>
          </Row>
        </Container>
      </>
    );
  }
}
