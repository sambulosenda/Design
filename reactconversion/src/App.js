import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    
  <div class="site">
    <ul class="topnav">
      <li>Iste Natus</li>
      <li>Explicabo</li>
      <li>Omnis</li>
      <li>Ipsa quae</li>
      <li class="highlighted">Perspiciatis Unde </li>
      <li class="avatar"> </li>
      <li class="profile">Veris Veritatis<i class="fas fa-angle-down"></i></li>
    </ul>

    <ul class="topnav1">
      <li class="divider Stunt">Sunt </span>
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
          <i class="fas fa-toggle-on"></i>
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
    <div class="content">
      <h1 class="title"><i class="fas fas1 fa-check"></i>CSed ut Perspiciatis unde</h1>
      <p>
        Sed ut Perspiciatis unde ominis iste natus error sit voluptatem accusantium doloremque laudantium,total rem
        aperiam, easque ipsa quae ab illo inventore Veritatis et quasi architecto beatae vitae dicta sunt explicabo
      </p>

      <div class="row">
        <div class="column">
          <p>Otam rem aperiam</p>
          <p>Ipsa quae</p>
          <p>Unde omins</p>
          <p>voluptatem(devrnem)</p>
        </div>
        <div class="column">
          <p>Perspiciatis Unde</p>
          <p>Architecto beatae vitae</p>
          <p>Perspiciatis Unde</p>
          <p>Architecto beatae vitae</p>
        </div>
        <div class="column">

          <p>architecto beatae vitae</p>
        </div>
      </div>

      <div class="row">
        <div class="column">

          <p>Totam</p>
          <p>Iste Natus</p>
          <p>Omnis Iste Natus Erro</p>
          <p>Explicabo</p>
        </div>
        <div class="column">
          <p>5.0</p>
          <p>Omnis iste natus</p>
          <p>PAccusantium deloremque laudant</p>
          <p>Accusantium dolor</p>
        </div>
        <div class="column">

     
        </div>
      </div>
      <div class="buttomcontrols">
        <div class="row buttomborder">
          <a href="" class="brown">Perspiciatis Unde</a>
          <a href="" class="highlighted"> <u>Accusantium deloremque laudant</u></a>
          <a href="" class="grey"> Voluptatem(duvrnmen)</a>
        </div>
        <hr>
        <div class="row ">
          <a href="" class="brown">Iste Natus</a>

          <select>
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

export default App;
