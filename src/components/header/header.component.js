import React, { Component } from 'react'
import cn from 'classnames'

import logo from '../../images/logo.png'
import './header.css'
import MenuToggle from '../menu/toggle.component.js'
import Menu from '../menu/menu.component'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleClose() {
    console.log('handle close')
    this.setState({ menuOpen: false })
  }

  handleOpen() {
    console.log('handle open')
    this.setState({ menuOpen: true })
  }

  render() {
    const { sectionLinks, socialLinks } = this.props
    const { menuOpen } = this.state

    return (
      <div className="header__wrapper">
        <div className={cn('header', { 'header--menu-open': menuOpen })}>
          <div className="menu__toggle-wrapper">
            <MenuToggle
              open={menuOpen}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
            />
          </div>
          <img src={logo} alt="Buffy Wicks Money" />
        </div>
        <Menu
          open={menuOpen}
          sectionLinks={sectionLinks}
          socialLinks={socialLinks}
        />
      </div>
    )
  }
}

export default Header
