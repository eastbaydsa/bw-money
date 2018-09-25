import React, { Fragment, Component } from 'react'
import { Helmet } from 'react-helmet'
import Intro from './components/intro/intro.component'
import Header from './components/header/header.component'
import DonorSlider from './components/slider/slider.component'
import Footer from './components/footer/footer.component'
import FAQ from './content/faq'
import FedUp from './content/fed-up'
import './app.css'

import socialLinks from './data/socialLinks'

const headDefaults = {
  title: 'Buffy Wicks Dot Money',
  description:
    'See the wealthy donors and PACs who privatize schools, repeal protections for working people, deregulate the finance industry, and fund Buffy Wicks.',
  image: 'https://buffywicks.money/images/open-graph-preview.png',
  alt: 'Buffy Wicks Dot Money'
}

const Head = props => {
  const metaTags = {
    'og:title': props.title || headDefaults.title,
    'og:description': props.description || headDefaults.description,
    'og:image': props.image || headDefaults.image,
    'og:image:alt': props.alt || headDefaults.alt
  }
  return (
    <Helmet>
      {Object.entries(metaTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
    </Helmet>
  )
}

class App extends Component {
  state = {
    meta: {}
  }

  setMeta = meta => {
    this.setState({ meta })
  }

  render() {
    return (
      <Fragment>
        <Head {...this.state.meta} />
        <div>
          <Header socialLinks={socialLinks} />
          <Intro />
          <DonorSlider setMeta={this.setMeta} />
          <FAQ />
          <FedUp />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

export default App
