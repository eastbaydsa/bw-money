import React from 'react'

export default function SocialLink({ label, url, icon }) {
  return (
    <a className="social-links__link" href={url}>
      <img width="30" height="30" src={icon} alt={label} />
    </a>
  )
}
