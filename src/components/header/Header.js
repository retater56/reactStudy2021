import React, { Component } from "react";
import './header.scss'

class Header extends Component {

  render() {
    return (
      <header className="header">
        <h3>You can find ALL what you need...</h3>
        <input className="header__search" placeholder="Search..."></input>
      </header>
    )
  }

}

export default Header
