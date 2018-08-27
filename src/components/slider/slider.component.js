import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import Slider from 'react-slick'
import './slider.css'

import johnScullyImg from '../../images/donors/john-scully.jpg'

const sliderSettings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '35px',
  slidesToShow: 1,
  speed: 500
}

const Slide = ({ imageSrc, name, donation, title, description, onClick }) => (
  <div className="bw-slide" onClick={onClick}>
    <div
      className="bw-slide__image"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    />
    <div className="bw-slide__content">
      <div className="bw-slide__name">
        <h3>{name}</h3>
        <div className="bw-slide__donation">
          ${donation.toLocaleString('en-US')}
        </div>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
)

class SlideModal extends Component {
  componentDidMount() {
    this.addClass(this.getBody(), 'modal-open')
  }

  componentWillUnmount() {
    this.removeClass(this.getBody(), 'modal-open')
  }

  getBody() {
    return document.querySelector('body')
  }

  addClass(el, className) {
    if (el.classList) el.classList.add(className)
    else el.className += ' ' + className
  }

  removeClass(el, className) {
    if (el.classList) el.classList.remove(className)
    else
      el.className = el.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
  }

  render() {
    const slide = (
      <div className="slide-modal">
        <div className="slide-modal__overlay" onClick={this.props.closeFn} />
        <Slide
          imageSrc={johnScullyImg}
          name="Richard Smiggles"
          donation={4400}
          title="Venture Capitalist"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
          fullScreen
        />
        <div className="slide-modal__close" onClick={this.props.closeFn}>
          &#215;
        </div>
      </div>
    )
    return createPortal(slide, document.querySelector('#modal'))
  }
}

class DonorSlider extends Component {
  state = {
    modal: null
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: null })
  }

  render() {
    return (
      <Fragment>
        <Slider {...sliderSettings}>
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
          <Slide
            imageSrc={johnScullyImg}
            name="Richard Smiggles"
            donation={4400}
            title="Venture Capitalist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
            onClick={this.openModal}
          />
        </Slider>
        {this.state.modal && <SlideModal closeFn={this.closeModal} />}
      </Fragment>
    )
  }
}

export default DonorSlider
