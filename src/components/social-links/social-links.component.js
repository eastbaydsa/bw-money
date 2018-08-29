import React from 'react'
import Link from './link.component'
import './social-links.css'

export default function SocialLinks({ links }) {
  return (
    <ul className="social-links">
      {links.map(link => (
        <Link key={link.label} {...link} />
      ))}
    </ul>
  )
}
