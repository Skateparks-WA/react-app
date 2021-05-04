import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import hero from '../assets/img/hero-background.png'

export default class Hero extends Component {
  render() {
    return (
      <Container className="w-100" fluid> 
        <img className="w-100" src={hero} alt=""></img>
      </Container>
    )
  }
}
