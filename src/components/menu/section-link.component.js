import React from 'react'

export default function SectionLink({ label, url }) {
  return (
    <a className="menu__section-link" href={url}>
      {label}
    </a>
  )
}
