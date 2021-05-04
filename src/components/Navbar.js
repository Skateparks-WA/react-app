import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import React from 'react';



class SkateNav extends React.Component {


  render() {
    return (
      <>
      

      <Navbar  style={{backgroundColor: "#0a1935"}} variant="dark" >
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
      </>
      );
  }




}

export default SkateNav;
