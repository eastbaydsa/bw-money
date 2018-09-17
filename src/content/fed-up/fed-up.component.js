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
            Corporations and billionaires are well organized and already waging
            class war on working people. Right now, wealthy donors like those
            featured on this site are setting the terms for what our society can
            look like. If ordinary working people come together to join in a
            movement, we can fight back and win! Only together can we build a
            society that works for the many, not the few. Join us.
          </p>
          <Button href="http://www.eastbaydsa.org/events">DO SOMETHING</Button>
        </div>
      </div>
    </div>
  )
}
