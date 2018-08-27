import React from 'react'
import Button from '../../components/button/button.component'
import H2 from '../../components/h2/h2.component'

export default function(props) {
  return (
    <div>
      <H2>Fed Up?</H2>
      <div className="content panel light">
        <div className="inner">
          <p>
            Like it or not, we're all in a class struggle. Donors like these are
            setting the terms, but we have the strength, and it's not too late
            to fight back.
          </p>
          <Button>DO SOMETHING</Button>
        </div>
      </div>
    </div>
  )
}
