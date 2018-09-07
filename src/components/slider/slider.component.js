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
    return require(`../../images/donors/no-photo.jpg`)
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
    const { imageSrc, name, donation, description, onClick } = this.props
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
            {/* <h4>{title}</h4> */}
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

const splitCategories = category => category.split(', ')

class DonorSlider extends Component {
  state = {
    selectedCategories: [],
    sliderSettings: this.baseSliderSettings
  }

  baseSliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '35px',
    slidesToShow: 1,
    speed: 500,
    arrows: false
  }

  desktopSliderSettings = Object.assign({}, this.baseSliderSettings, {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '100px',
    arrows: true
  })

  componentDidMount() {
    this.setSliderSettings()
    window.addEventListener('resize', this.setSliderSettings)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSliderSettings)
  }

  setSliderSettings = () => {
    const sliderSettings =
      window.innerWidth >= 768
        ? this.desktopSliderSettings
        : this.baseSliderSettings
    if (this.state.sliderSettings !== sliderSettings) {
      this.setState({ sliderSettings })
    }
  }

  categories = donors
    .reduce((categories, donor) => {
      const cats = splitCategories(donor['Category'])
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
    const { selectedCategories, sliderSettings } = this.state
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
        <Slider {...sliderSettings}>
          {donors
            .filter(donor => {
              if (selectedCategories.length === 0) return true
              const cats = splitCategories(donor['Category'])
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
        <div id="arrow-preloader" />
      </Fragment>
    )
  }
}

export default DonorSlider
