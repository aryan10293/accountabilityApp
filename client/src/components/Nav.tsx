import React from 'react'
import '../css/nav.css'
import NavLinks from './NavLinks'
import { useState, useEffect } from 'react';
function Nav() {
  const links = ['Home', 'Goals', 'Progress Logs', 'Community', 'Profile'];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [active, setActive] = useState<boolean>(false)
  const hamMenu = (e: any) => {
    setActive(!active)
  }
  useEffect(() => {
    // Function to update screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className={`off-screen-menu ${active ? 'active' : ''}`}>

        <ul className='off-screen-list'>
          {links.map((x: string) => {
            return (
              <NavLinks heading={x} />
            )
          })}
        </ul>
      </div>
      <nav id={`${screenWidth < 820 ? 'nav' : ''}`} className={`${screenWidth < 820 ? 'nav-menu' : 'main-nav'}`}>
        <ul className='nav-ul '>
          {links.map((x: string) => {
            return (
              <NavLinks heading={x} />
            )
          })}
        </ul>
        <div onClick={hamMenu} className={`ham-menu ${active ? 'active' : ''}`}>
          <span className="ham-span"></span>
          <span className="ham-span"></span>
          <span className="ham-span"></span>
        </div>
      </nav>
    </>
  )
}

export default Nav
