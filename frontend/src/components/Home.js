import React, { Component } from "react";
import Nav from './Nav'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Nav>

        </Nav>
        <h1> este es un home</h1>

      </div>

    );
  };
}