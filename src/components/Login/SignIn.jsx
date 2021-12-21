import React, { useState } from 'react'
import './Signin.css'

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault()
        const loginData = {
            userName: username,
            password: password
        }
        const url = process.env.REACT_APP_BASE_URI +  'login/'
        fetch(url , {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( loginData)
        }).then(res => res.json())
            .then(res => console.log(res));

    }
    const onChangeHandler = (event, setFunction) => {
        setFunction(event.target.value);
    };
    return (
        <div className="signin-form">
            <h3>Welcome Back,</h3>
            <h4> Login to continue</h4>
            <form>
                <div className="signin-input-email">
                    <label> User Name </label>
                    <input type="text" name="signin-username" id="signin-email"
                        onChange={e => onChangeHandler(e, setUsername)} />
                </div>
                <div className="signin-input-password">
                    <label> Password </label>
                    <input type="password" name="signin-password"
                        autoComplete="on" id="signin-password" onChange={e => onChangeHandler(e, setPassword)} />
                </div>
                <div className="signin-input-password">
                    <button id="signin-login-btn" onClick={e => { login(e) }} >Login</button>
                </div>
                <div>
                    <br></br>
                    <span>Hint:</span>
                    <ul>
                        <li>accountant/password</li>
                        <li>approver/password</li>
                    </ul>
                </div>
            </form>
        </div>
    )
}
