import React from 'react'
import cn from 'classnames'

import SectionLink from './section-link.component.js'
import SocialLink from './social-link.component.js'
import './menu.css'

export default function Menu({ open, sectionLinks, socialLinks }) {
  return (
    <div className={cn('menu', { 'menu--open': open })}>
      <ul className="menu__section-links">
        {sectionLinks.map(link => (
          <SectionLink key={link.url} {...link} />
        ))}
      </ul>
      <ul className="menu__social-links">
        {socialLinks.map(link => (
          <SocialLink key={link.url} {...link} />
        ))}
      </ul>
    </div>
  )
}
