import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem , NavDropdown } from 'react-bootstrap';


class CustomNavbar2 extends Component {
    render() {
        return (
          <div className="container">

          <ul class="topnav1">
          <li class="divider Stunt">Sunt 
          </li>
    
          <li class="divider">
            <div class="my-fancy-container">
              <i class="fas fa-chevron-circle-down"></i>
              <span class=" my-text">Betae Vita</span>
            </div>
          </li>
          <li class="divider"> Doloremque Laudantium Otam Doloremque Laudantium Otam</li>
    
          <div class="right-icons">
            <div class="my-fancy-container">
              <i class="fas fa-archive"></i>
              <span class="my-text">Archieto</span>
            </div>
    
            <div class="my-fancy-container">
              <i class="fas fa-toggle-on"></i>
              <span class="my-text">Aperiam</span>
            </div>
    
            <div class="my-fancy-container">
              <i class="fas fa-toggle-off"></i>
              <span class="my-text">Totam</span>
            </div>
            <div class="my-fancy-container">
              <i class="far fa-envelope"></i>
              <span class="my-text grey">Rem</span>
            </div>
    
          </div>
        </ul>
        </div>
          
        )
    }
}

export default CustomNavbar2;