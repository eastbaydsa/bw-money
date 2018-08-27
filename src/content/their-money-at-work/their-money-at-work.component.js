import React from 'react'
import Arrow from '../../components/arrow/arrow.component'
import H2 from '../../components/h2/h2.component'

export default function(props) {
  return (
    <div>
      <H2>Their Money at Work</H2>
      <div className="content panel dark" id="money">
        <div className="inner">
          <p>Illustration: donors give money (TK)</p>
        </div>
      </div>
      <Arrow />
      <div className="content panel dark" id="politics">
        <div className="inner">
          <p>Illustration: politicians work on behalf of donors (TK)</p>
        </div>
      </div>
      <Arrow />
      <div className="content panel dark" id="workingclass">
        <div className="inner">
          <p>Illustration: working class gets the shaft (TK)</p>
        </div>
      </div>
      <Arrow />
    </div>
  )
}
