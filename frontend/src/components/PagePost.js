import React, { Component } from "react";
import Nav from './Nav'
import EjemploPost from './EjemploPost'

export default class PagePost extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Nav>
          
        </Nav>
        <h1> este es un contenido diferente al home Post</h1>
        <EjemploPost>
          
        </EjemploPost>
      </div>

    );
  };
}