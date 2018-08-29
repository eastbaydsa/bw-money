import React, { Component } from 'react'

import logo from '../../images/logo.png'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header__wrapper">
        <div className="header">
          <img src={logo} alt="Buffy Wicks Money" />
        </div>
      </div>
    )
  }
}

export default Header
