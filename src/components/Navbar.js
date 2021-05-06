import { Navbar, Nav, Form, Button } from "react-bootstrap";
import React from "react";
import logo from '../assets/img/skatewa-logo.png'
import LoginButton from "./Login.js"

class SkateNav extends React.Component {
  render() {
    return (
      <>
        <Navbar style={{ backgroundColor: "#0a1935" }} variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="239"
              height="74"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
            <Nav.Link href="/about">Team</Nav.Link>
          </Nav>
          {
            !this.props.auth0.isAuthenticated ? <LoginButton /> : <img style={{borderRadius: "50%", height:"75px"}}src={this.props.auth0.user.picture} alt=""></img>
          }
          <Form inline>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default SkateNav;
