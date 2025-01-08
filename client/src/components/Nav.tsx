import React from 'react'
import '../css/nav.css'
import NavLinks from './NavLinks'
function Nav() {
    const links = ['Home', 'Goals','Progress Logs', 'Community', 'Profile', ]
  return (
    <nav className='main-nav'>
      this is the nav
      <ul className='nav-ul'>
        {links.map((x:string) => {
            return (
                <NavLinks heading={x} />
            )
        })}
      </ul>
    </nav>
  )
}

export default Nav
