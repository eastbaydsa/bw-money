import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import Measure from 'react-measure'
import ReactMarkdown from 'react-markdown'
import Select from 'react-select'
import classNames from 'classnames'
import donors from '../../data/donors.json'
import './slider.css'

const getImage = donorName => {
  const fileName = donorName
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/("|,)/g, '')
    .replace(/&/g, 'and')
  try {
    return require(`../../images/donors/${fileName}.jpg`)
  } catch (e) {
    return null
  }
}

class Slide extends Component {
  state = {
    nameDimensions: {
      width: 0,
      height: 0
    }
  }

  linkRenderer = props => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )

  render() {
    const { imageSrc, name, donation, title, description, onClick } = this.props
    return (
      <div className="bw-slide" onClick={onClick}>
        {imageSrc && (
          <div
            className="bw-slide__image"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        )}
        <div
          className={classNames('bw-slide__content', {
            'bw-slide__content--no-image': !imageSrc
          })}
        >
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
              height: `calc(100% - ${this.state.nameDimensions.height}px)`
            }}
          >
            <h4>{title}</h4>
            <ReactMarkdown
              renderers={{ link: this.linkRenderer }}
              source={description}
            />
          </div>
        </div>
      </div>
    )
  }
}

const splitCatgories = category => category.split(', ')

class DonorSlider extends Component {
  state = {
    selectedCategories: []
  }

  sliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '35px',
    slidesToShow: 1,
    speed: 500
  }

  categories = donors
    .reduce((categories, donor) => {
      const cats = splitCatgories(donor['Category'])
      cats.forEach(cat => {
        if (!categories.includes(cat)) categories.push(cat)
      })
      return categories
    }, [])
    .map(cat => ({ value: cat, label: cat }))

  handleChange = options => {
    this.setState({
      selectedCategories: options.map(option => option.value)
    })
  }

  render() {
    const { selectedCategories } = this.state
    return (
      <Fragment>
        <div className="donor-categories">
          <Select
            options={this.categories}
            isMulti
            onChange={this.handleChange}
            placeholder="Filter donor types..."
            className="react-select-container"
          />
        </div>
        <Slider {...this.sliderSettings}>
          {donors
            .filter(donor => {
              if (selectedCategories.length === 0) return true
              const cats = splitCatgories(donor['Category'])
              return cats.reduce((inResultSet, cat) => {
                return inResultSet || selectedCategories.includes(cat)
              }, false)
            })
            .map(donor => (
              <Slide
                key={donor['Name']}
                imageSrc={getImage(donor['Name'])}
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
