import React from 'react'
import '../css/landingPage.css'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { Fragment } from 'react'
function Landing() {
  return (
    <>
      <Logo/>
      <section className="hero-section">
            <h1>Stay With Me Now!</h1>
            <p>Stay focused, set goals, track progress, and achieve 
                success with our powerful accountability tool for real results.
            </p>
            <div className="links">
              <Link to="/login" className='btn login'>Login</Link>
              <Link to="/register" className='btn create'>Create Account</Link>
            </div>
        </section>
    </>
  )
}

export default Landing
