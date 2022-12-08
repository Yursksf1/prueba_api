import React, { Component } from "react";
import Nav from './Nav'
import Ejemplo from './Ejemplo'

export default class PageGet extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Nav>
          
        </Nav>
        
        <h1> este es un contenido diferente al home Get</h1>
        <Ejemplo>
          
        </Ejemplo>
      </div>

    );
  };
}