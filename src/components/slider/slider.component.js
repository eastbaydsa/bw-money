import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import Measure from 'react-measure'
import ReactMarkdown from 'react-markdown'
import Select from 'react-select'
import classNames from 'classnames'
import donors from '../../data/donors.json'
import './slider.css'

const kebabCase = str =>
  str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/("|,)/g, '')
    .replace(/&/g, 'and')

const getImage = donorName => {
  try {
    const fileName = kebabCase(donorName)
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
      <div
        className={classNames('bw-slide', kebabCase(name))}
        onClick={onClick}
      >
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
                {donation && (
                  <div className="bw-slide__donation">{donation}</div>
                )}
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

const setHash = value => {
  if (!value) {
    return removeHash()
  }
  const hash = `#${value}`
  if ('pushState' in window.history) {
    window.history.pushState(null, null, hash)
  } else {
    window.location.hash = hash
  }
}

// https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r/5298684#5298684
const removeHash = () => {
  let scrollV,
    scrollH,
    loc = window.location
  if ('pushState' in window.history)
    window.history.pushState('', document.title, loc.pathname + loc.search)
  else {
    // Prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop
    scrollH = document.body.scrollLeft

    loc.hash = ''

    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV
    document.body.scrollLeft = scrollH
  }
}

const getSlideIndexById = hash => {
  const id = hash.replace('#', '')
  return donors.findIndex(donor => id === kebabCase(donor['Name']))
}

const baseSliderSettings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '35px',
  slidesToShow: 1,
  initialSlide: 0,
  speed: 500,
  arrows: false,
  afterChange: index => {
    const id = index < 1 ? null : kebabCase(donors[index]['Name'])
    setHash(id)
  }
}

const tabletSliderSettings = Object.assign({}, baseSliderSettings, {
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: '100px',
  arrows: true
})

const desktopSliderSettings = Object.assign({}, tabletSliderSettings, {
  slidesToShow: 3
})

const getSliderSettings = () => {
  const windowWidth = window.innerWidth
  if (windowWidth >= 1000) {
    return desktopSliderSettings
  } else if (windowWidth >= 768) {
    return tabletSliderSettings
  }
  return baseSliderSettings
}

const getInitialSlideIndex = () => {
  const index = getSlideIndexById(window.location.hash)
  return index < 0 ? 0 : getSlideIndexById(window.location.hash)
}

class DonorSlider extends Component {
  state = {
    selectedCategories: [],
    sliderSettings: Object.assign({}, getSliderSettings(), {
      initialSlide: getInitialSlideIndex()
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSliderSettings)
    window.addEventListener('click', this.jumpToSlide, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSliderSettings)
    window.removeEventListener('click', this.jumpToSlide, false)
  }

  bindRef = ref => {
    this.slider = ref
  }

  setSliderSettings = () => {
    const sliderSettings = getSliderSettings()
    if (this.state.sliderSettings !== sliderSettings) {
      this.setState({ sliderSettings })
    }
  }

  jumpToSlide = event => {
    const { hash } = event.target
    if (hash) {
      const index = getSlideIndexById(hash)
      if (index > -1) {
        event.preventDefault()
        this.slider.slickGoTo(index)
      }
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
    .filter(Boolean)
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
        <Slider ref={this.bindRef} {...sliderSettings}>
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
