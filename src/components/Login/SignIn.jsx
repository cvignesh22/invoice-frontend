import React from 'react'
import './Signin.css'

export default function SignIn() {
    return (
        <div className="signin-form">
            <h3>Welcome Back,</h3>
            <h4> Login to continue</h4>
            <form>
                <div className="signin-input-email">
                    <label> User Name </label>
                    <input type="text" name="signin-username" id="signin-email" />
                </div>
                <div className="signin-input-password">
                    <label> Password </label>
                    <input type="password" name="signin-password" autocomplete="on" id="signin-password" />
                </div>
                <div className="signin-input-password">
                    <button id="signin-login-btn" type="submit">Login</button>
                </div>
                <div>
                <br></br>
                    <span>Hint:</span>
                    <br></br>
                        <li>accountant/password</li>
                        <li>approver/password</li>
                </div>
            </form>
        </div>
    )
}
