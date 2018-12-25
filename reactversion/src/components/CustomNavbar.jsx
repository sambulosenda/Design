import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem , NavDropdown } from 'react-bootstrap';



class CustomNavbar extends Component {
    render() {
        return (
          <ul class="topnav">
      <li class="menuitem"><a href="index.html">Iste Natus</a></li>
      <li class="menuitem"><a href="index.html">Explicabo</a></li>
      <li class="menuitem"><a href="index.html">Omnis</a></li>
      <li class="menuitem"><a href="index.html">Ipsa quae</a></li>
      <li class="menuitem"><a href="index.html">
          <div class="highlighted">Perspiciatis Unde</div>
        </a></li>
    </ul>    
        )
    }
}

export default CustomNavbar;