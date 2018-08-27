import React from 'react'
import './button.css'

export default function Button({ children, ...otherProps }) {
  return (
    <button className="button blue space" {...otherProps}>
      {children}
    </button>
  )
}
