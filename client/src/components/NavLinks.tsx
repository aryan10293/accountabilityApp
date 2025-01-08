import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'
function NavLinks(props:any) {
  console.log(props)
  return (
    <button  className={`nav-button ${props.heading}`}>
      <Link to={`/${props.heading}`}>{props.heading}</Link>
    </button>
  )
}

export default NavLinks

