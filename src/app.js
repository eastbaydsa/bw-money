import React, { Component } from 'react'
import Header from './components/header/header.component'
import DonorSlider from './components/slider/slider.component'
import Footer from './components/footer/footer.component'
import TheirMoneyAtWork from './content/their-money-at-work'
import FAQ from './content/faq'
import FedUp from './content/fed-up'
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DonorSlider />
        <TheirMoneyAtWork />
        <FAQ />
        <FedUp />
        <Footer />
      </div>
    )
  }
}

export default App
