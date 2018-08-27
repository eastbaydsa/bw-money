import React from 'react'
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

const Slide = ({ imageSrc, name, donation, title, description }) => (
  <div className="bw-slide">
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

const DonorSlider = () => (
  <Slider {...sliderSettings}>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
    <div>
      <Slide
        imageSrc={johnScullyImg}
        name="Richard Smiggles"
        donation={4400}
        title="Venture Capitalist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nisi et sollicitudin faucibus, nulla metus faucibus velit, et efficitur magna sem at metus. Quisque interdum ac felis porta pharetra. Vestibulum pretium convallis auctor. Fusce elementum enim nec libero venenatis, vitae sollicitudin mi congue. Nullam vehicula mi a justo condimentum pulvinar. In hendrerit vel urna sit amet viverra. Duis vulputate a neque venenatis semper. Suspendisse non nunc eget risus sodales dictum id non diam. Nunc aliquam eros et turpis vestibulum, ac gravida urna commodo. Aliquam sollicitudin tortor et lacus aliquam bibendum ut eu enim. Etiam vitae sem vel leo lacinia fringilla vel sit amet ligula. Praesent vestibulum sodales varius."
      />
    </div>
  </Slider>
)

export default DonorSlider
