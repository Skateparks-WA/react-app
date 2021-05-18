import { Navbar, Nav} from "react-bootstrap";
import React from "react";
import logo from '../assets/img/skatewa-logo.png'
import LoginButton from "./Login.js"
import MiniProfile from "./MiniProfile.js"
class SkateNav extends React.Component {
  render() {
    return (
        <Navbar style={{ backgroundColor: "#0a1935" }} variant="dark" expand="md">
          <Navbar.Brand href="/">
            <img 
            alt=""
            src={logo}
            style={{ maxWidth: "10em"}}
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/about">Team</Nav.Link>
          </Nav>
          {
            !this.props.auth0.isAuthenticated ? <LoginButton /> : <MiniProfile auth0={this.props.auth0}/>
          }
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default SkateNav;
