import React, { useContext, useEffect } from 'react'
import SignIn from './SignIn'
import './Login.css'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [, , checkAuth] = useContext(AuthContext)
    const navigate = useNavigate();
    const auth = checkAuth()
    useEffect(() => {
        if (auth) {
            navigate({
                pathname: '/dashboard',
            });
        }
    }, [auth, navigate])


    return (
        <div className="login-page">
            <div className="login-img-container"></div>
            <div className="login-signin-container">
                <SignIn />
            </div>
        </div>
    )
}
