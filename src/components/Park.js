import React, { Component } from "react";
import { Card, CardDeck, Container, Row } from "react-bootstrap";
import MyModal from "./Mymodal";
import image2 from "../assets/img/venice-skate.jpg";
import image3 from "../assets/img/beachskate.jpg";
import image1 from "../assets/img/skater.jpg";

export default class Park extends Component {
  render() {

    if (this.props.covered === false) {
      this.props.parks.slice(0, this.props.seeMore).map((parks, index) => {
        return (
          <Card
            style={{ minWidth: "18em", maxWidth: "18em", marginBottom: "5%" }}
            onClick={this.addFavorite}
          >
            <Card.Img src={image1}></Card.Img>
            <Card.Body>
              <Card.Title>{parks.name}Park</Card.Title>
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
        )
      });
    } else {

      return (
        <>

          <Container fluid>
            <Row>
              <CardDeck>
                {this.props.covered === true && this.props.lights === false ?
                  this.props.parks.filter(parks => parks.rain_cover === true).slice(0, this.props.seeMore).map((parks, index) => {
                    return (
                      <Card
                        style={{ minWidth: "18em", maxWidth: "18em", marginBottom: "5%" }}
                        onClick={this.addFavorite}
                      >
                        <Card.Img src={image1}></Card.Img>
                        <Card.Body>
                          <Card.Title>{parks.name}Park</Card.Title>
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
                  }) : this.props.parks.filter(parks => parks.rain_cover === true).filter(parks=>parks.night_light).slice(0, this.props.seeMore).map((parks, index) => {
                    return (
                      <Card
                        style={{ minWidth: "18em", maxWidth: "18em", marginBottom: "5%" }}
                        onClick={this.addFavorite}
                      >
                        <Card.Img src={image1}></Card.Img>
                        <Card.Body>
                          <Card.Title>{parks.name}Park</Card.Title>
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
}