import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react'
import Logo from '../components/Logo';
import '../css/loginRegister.css'
const url  = import.meta.env.VITE_url
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [auth ,setAuth] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    interface Login{
      email:string,
      password:string
    }
    const login:Login = {
      email:email,
      password:password
    }
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        console.log('clicked')
        const register = await fetch(`${url}/auth/login`, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })

        const accountCreated = await register.json()
        console.log(accountCreated)
        if(accountCreated.error ==='Unauthorized'){
          setAuth(true)
          setErrorMessage(accountCreated.message)
        } else {
          localStorage.setItem('token', accountCreated.access_token)
          navigate("/feed")
        }
        
    }
  return (
    <>
    <Logo/>
      <div className='container'>
        <div className='card card-one'>
            <h3>Login into account</h3>
            <div className='idk'>
                <div className='login-card google'>
                    <FontAwesomeIcon className='icon' icon={faGoogle} style={{color: 'white', fontSize: '12px',  }}></FontAwesomeIcon>
                    <p>Sign in  with Google</p>
                </div>
                <div className='login-card github'>
                    <FontAwesomeIcon className='icon' icon={faGithub} style={{color: 'black', fontSize: '12px' }}></FontAwesomeIcon>
                    <p>Sign in  with Github</p>
                </div>
            </div>
        </div>
        <div className='card form'>
            <h3>Or use this way</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder='email' onChange={(e:any) => {setEmail(e.target.value)}} value={email} className='login-form-input' type="email" />
                <input placeholder='password' onChange={(e:any) => {setPassword(e.target.value)}} value={password} className="login-form-input" type='password'/>
                {auth ? <p style={{color:'red'}}>Password or email is incorrect</p> : null}
                <button type='submit'>Login</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
