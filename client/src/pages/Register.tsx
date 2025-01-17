import React from 'react'
import { useState, Fragment } from 'react';
import Logo from '../components/Logo';
import '../css/loginRegister.css'
const url = import.meta.env.VITE_url
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
function Register() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')

    interface CreateAccount {
        email: string,
        password: string,
        confirmPassword: string,
        username: string
    }

    const ceateAccount: CreateAccount = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        username: username
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const register = await fetch(`${url}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ceateAccount)
        })

        const accountCreated = await register.json()
        if (accountCreated.username) {
            alert('account was sucessfully created please login')

            window.location.href = '/login'
        }
        console.log(accountCreated)

        // add soemthing to redirect user to login or 
        // save token to localhost and redirect user to feed
    }
    return (
        <>
            <Logo />
            <div className='container'>
                <div className='card card-one'>
                    <h3>Create Account</h3>
                    <div className='idk'>
                        <div className='login-card google'>
                            <FontAwesomeIcon className='icon' icon={faGoogle} style={{ color: 'white', fontSize: '12px', }}></FontAwesomeIcon>
                            <p>Create Account With Google</p>
                        </div>
                        <div className='login-card github'>
                            <FontAwesomeIcon className='icon' icon={faGithub} style={{ color: 'black', fontSize: '12px' }}></FontAwesomeIcon>
                            <p>Create Account With Github</p>
                        </div>
                    </div>
                </div>
                <div className='card form'>
                    <h3> Create Account</h3>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='username' onChange={(e: any) => { setUsername(e.target.value) }} value={username} className="login-form-input" type='text' />
                        <input placeholder='email' className='login-form-input' onChange={(e: any) => { setEmail(e.target.value) }} value={email} type="email" />
                        <input placeholder='password' className="login-form-input" onChange={(e: any) => { setPassword(e.target.value) }} value={password} type='password' />
                        <input placeholder='confirm password' onChange={(e: any) => { setConfirmPassword(e.target.value) }} value={confirmPassword} className="login-form-input" type='password' />
                        <button type='submit'>Create Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
