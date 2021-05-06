import React from 'react'
import { Card, CardDeck} from "react-bootstrap";
import image1 from "../assets/img/skater.jpg";

export default class Favorites extends React.Component{
  render() {
    return (
      <CardDeck>
        <Card style={{ minWidth: "18em", maxWidth: "18em", marginBottom:"5%"}}
        >
        <Card.Img src={image1}></Card.Img>
          Skate Park
        </Card>

        <Card style={{ minWidth: "18em", maxWidth: "18em", marginBottom:"5%"}}>
        <Card.Img src={image1}></Card.Img>
          Skate Park 2
        </Card>
        
        <Card style={{ minWidth: "18em", maxWidth: "18em", marginBottom:"5%"}}>
        <Card.Img src={image1}></Card.Img>
          Skate Park 3
        </Card>
      </CardDeck>
    );
  }
}