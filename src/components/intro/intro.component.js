import React from 'react'
import CountUp from 'react-countup'
import H2 from '../h2/h2.component'
import './intro.scss'

const Intro = () => (
  <div className="intro">
    <H2>
      Buffy Wicks
      <br />
      Total Donations
    </H2>
    <p className="donation-value">
      <CountUp
        prefix="$"
        delay={0.5}
        start={0}
        end={1483283}
        separator=","
        duration={2.5}
        useEasing
      />
    </p>
    <p className="donation-subhead">
      including direct donations
      <br />
      and independent expenditures
    </p>
    <p className="introduction">
      Learn about the wealthy donors and PACs who privatize schools, repeal
      protections for working people, deregulate the finance industry, and fund
      Buffy Wicks.
    </p>
  </div>
)

export default Intro
