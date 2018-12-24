import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem , NavDropdown } from 'react-bootstrap';


class CustomNavbar2 extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
     
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
      Iste Natus
      </NavItem>
      <NavItem eventKey={2} href="#">
      Explicabo
      </NavItem>
      <NavItem eventKey={2} href="#">
      Omnis
      </NavItem>
      <NavItem eventKey={2} href="#">
      Ipsa quae      
      </NavItem>
    </Nav>


    <Nav pullRight>
      <NavItem eventKey={1} href="#">
       Veris Veritatis
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          
        )
    }
}

export default CustomNavbar2;