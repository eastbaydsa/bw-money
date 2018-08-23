import React, { Component } from 'react'
import Header from './components/header/header.component'
import H2 from './components/h2/h2.component'
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <H2>Their Money at Work</H2>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            massa enim. Proin condimentum sollicitudin felis a dapibus.
            Pellentesque massa purus, venenatis sit amet euismod sed, accumsan
            sed turpis.
          </p>
          <p>
            Quisque sapien purus, semper aliquet ultrices eu, aliquet id felis.
            Vivamus justo massa, elementum ac eleifend et, iaculis feugiat
            neque. Etiam mollis dignissim risus, ac eleifend felis faucibus nec.
            Suspendisse egestas dui in justo malesuada, eu varius urna
            ultricies. Cras at aliquet felis. Nunc a euismod diam.
          </p>
        </div>
      </div>
    )
  }
}

export default App
