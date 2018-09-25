import React, { Component } from 'react'
import Intro from './components/intro/intro.component'
import Header from './components/header/header.component'
import DonorSlider from './components/slider/slider.component'
import Footer from './components/footer/footer.component'
import FAQ from './content/faq'
import FedUp from './content/fed-up'
import './app.css'

import socialLinks from './data/socialLinks'

class App extends Component {
  render() {
    return (
      <div>
        <Header socialLinks={socialLinks} />
        <Intro />
        <DonorSlider />
        <FAQ />
        <FedUp />
        <Footer />
      </div>
    )
  }
}

export default App
