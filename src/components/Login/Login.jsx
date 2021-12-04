import React from 'react'
import SignIn from './SignIn'
import './Login.css'

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-img-container"></div>
            <div className="login-signin-container">
                <SignIn />
            </div>
        </div>
    )
}
