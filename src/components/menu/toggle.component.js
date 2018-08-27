import React from 'react'

export default function({ open, onClose, onOpen }) {
  return open ? (
    <button className="menu__toggle" onClick={onClose}>
      x
    </button>
  ) : (
    <button className="menu__toggle" onClick={onOpen}>
      +
    </button>
  )
}
