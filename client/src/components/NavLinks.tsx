import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'
function NavLinks(props: any) {
  console.log(props)
  return (
    <li className={`nav-button ${props.heading}`}>
      <Link className='off-screen-list-item' to={`/${props.heading.split(' ').join('').toLowerCase()}`}>{props.heading}</Link>
    </li>
  )
}

export default NavLinks

