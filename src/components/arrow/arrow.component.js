import React, { Component } from 'react'
import './arrow.scss'
import arrow from '../../images/down-arrow.svg'

class Arrow extends Component {
  render() {
    return (
      <div className="arrow">
        <img src={arrow} alt="downward pointing arrow" />
      </div>
    )
  }
}

export default Arrow
