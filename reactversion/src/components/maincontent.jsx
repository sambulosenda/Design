import React, { Component } from 'react';
import { Label, Container, Navbar, Nav, NavItem, MenuItem , NavDropdown } from 'react-bootstrap';


class maincontent extends Component {
    render() {
        return (
            <div className="container ">
                  
      <h1 class="title"><i className="fas fas1 fa-check"></i>CSed ut Perspiciatis unde</h1>
      <p>
        Sed ut Perspiciatis unde ominis iste natus error sit voluptatem accusantium doloremque laudantium,total rem
        aperiam, easque ipsa quae ab illo inventore Veritatis et quasi architecto beatae vitae dicta sunt explicabo
      </p>

      <div ClassName="row">
        <div className="column">
          <p>Otam rem aperiam</p>
          <p>Ipsa quae</p>
          <p>Unde omins</p>
          <p>voluptatem(devrnem)</p>
        </div>
        <div className="column">
          <p>Perspiciatis Unde</p>
          <p>Architecto beatae vitae</p>
          <p>Perspiciatis Unde</p>
          <p>Architecto beatae vitae</p>
        </div>
        <div className="column">
          <div className="low">
         <p>architecto beatae vitae</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">

          <p>Totam</p>
          <p>Iste Natus</p>
          <p>Omnis Iste Natus Erro</p>
          <p>Explicabo</p>
        </div>
        <div className="column">
          <p>5.0</p>
          <p>Omnis iste natus</p>
          <p>PAccusantium deloremque laudant</p>
          <p>Accusantium dolor</p>
        </div>
        <div className="column">


        </div>
      </div>
      <div className="buttomcontrols">
        <div className="row buttomborder">
          <a href="index.html" class="brown">Perspiciatis Unde</a>
          <a href="index.htm" class="highlighted"> <span class="underline">Accusantium deloremque laudant</span></a>
          <a href="index.htm" class="grey"> Voluptatem(duvrnmen)</a>
        </div>
        <hr>
        </hr>
        <div className="row ">
          <a href="" class="brown">Iste Natus</a>
        
          <select class="round">
            <option value="Accusantium deloremque laudant">Accusantium deloremque laudant</option>
            <option value="Architecto beatae vitae">Architecto beatae vitae</option>
            <option value="Architecto beatae vitae">Architecto beatae vitae</option>
            <option value="Architecto beatae vitae">Architecto beatae vitae</option>
            <i class="fas fa-angle-up"></i>
          </select>



          <a href="" class="highlighted">Unde omnis</a>
        </div>
      </div>
    </div>

            
        );
    }
}

export default maincontent;