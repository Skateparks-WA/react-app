import React, { Component } from "react";
import { Card, CardDeck, Container, Row } from "react-bootstrap";
import MyModal from "./Mymodal";
import image1 from "../assets/img/skater.jpg";

export default class AllPark extends Component {
  render() {
    return (
      <>

        <Container fluid>
          <Row>
            <CardDeck>
              {this.props.covered === false ?
                this.props.allParks.map((parks, index) => {
                  return (
                    <Card
                      style={{ minWidth: "18em", maxWidth: "18em", marginBottom: "5%" }}
                      onClick={this.addFavorite}
                      key={index}
                    >
                      <Card.Img src={image1}></Card.Img>
                      <Card.Body>
                        <Card.Title>{parks.name}Park</Card.Title>
                        <Card.Text>
                          <b>Native Lands:</b> {parks.native_land}
                        </Card.Text>
                        <Card.Text>😍|🚻|☔|💡|🛠️ </Card.Text>
                        <MyModal parks={parks} index={index} />
                      </Card.Body>
                    </Card>
                  );
                }) : this.props.allParks.filter(parks => parks.rain_cover === true).map((parks, index) => {
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
