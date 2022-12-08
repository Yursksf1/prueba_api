import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="nav nav-tabs">
        <a href="/">
          Home
        </a>
        
        <a href="/page1">
          pestaña 1
        </a>

        <a href="/page2">
          pestaña 2
        </a>
      </div>
    );
  };
}