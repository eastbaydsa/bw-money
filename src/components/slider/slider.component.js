import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import Measure from 'react-measure'
import donors from '../../data/donors.json'
import './slider.css'

import johnScullyImg from '../../images/donors/john-scully.jpg'

class Slide extends Component {
  state = {
    nameDimensions: {
      width: 0,
      height: 0
    }
  }

  render() {
    const { imageSrc, name, donation, title, description, onClick } = this.props
    return (
      <div className="bw-slide" onClick={onClick}>
        <div
          className="bw-slide__image"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
        <div className="bw-slide__content">
          <Measure
            bounds
            onResize={contentRect => {
              this.setState({ nameDimensions: contentRect.bounds })
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef} className="bw-slide__name">
                <h3>{name}</h3>
                <div className="bw-slide__donation">{donation}</div>
              </div>
            )}
          </Measure>
          <div
            className="bw-slide__scrollable"
            style={{
              height: `calc(100% - ${this.state.nameDimensions.height})`
            }}
          >
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

class DonorSlider extends Component {
  state = {
    modal: null,
    isDragging: false
  }

  sliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '35px',
    slidesToShow: 1,
    speed: 500
  }

  render() {
    return (
      <Fragment>
        <Slider {...this.sliderSettings}>
          {donors.map(donor => (
            <Slide
              key={donor['Name']}
              imageSrc={johnScullyImg}
              name={donor['Name']}
              donation={donor['Amount Donated']}
              title={donor['Description hed']}
              description={donor['Blurb']}
            />
          ))}
        </Slider>
      </Fragment>
    )
  }
}

export default DonorSlider
