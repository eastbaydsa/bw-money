import React from 'react'
import './button.css'

export default function Button({ children, ...otherProps }) {
  return (
    <div className="button-wrapper">
      <a
        className="button blue space"
        target="_blank"
        rel="noopener noreferrer"
        {...otherProps}
      >
        {children}
      </a>
    </div>
  )
}
