import { Navbar, Nav, Form, Button } from "react-bootstrap";
import React from "react";
import logo from '../assets/img/skatewa-logo.png'

class SkateNav extends React.Component {
  render() {
    return (
      <>
        <Navbar style={{ backgroundColor: "#0a1935" }} variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="239"
              height="74"
              className="d-inline-block align-top"
            />{" "}
            
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">Favorites</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="warning" type="submit">Login</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default SkateNav;
