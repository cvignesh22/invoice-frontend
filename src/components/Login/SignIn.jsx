import React, { useState , useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './Signin.css'
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth,setAuth ,] = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    console.log(auth)

    const login = (event) => {
        event.preventDefault()
        setOpen(true)
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
        })
        .then(res => res.json())
        .then(res => {
            if(!!res.token) {
                console.log(res) ; 
                localStorage.setItem('auth' , JSON.stringify(res));
                setAuth(res);
                setOpen(false)
                navigate({
                    pathname: '/dashboard'
                });
            } else {
                setError(true)
                setOpen(false)
            }
            }).catch((err) => {
                console.log(err)
                setError(true)
                setOpen(false)
            }) ;

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
                {error && <div style={{color : "red" , padding: "10px"}}> UserName or Password is incorrect</div> }
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
            <Modal open={open} sx={{display:"flex" , alignItems: "center" , justifyContent : "center"}}>
                <div className="modal-loader">
                   <CircularProgress />
                </div>
            </Modal>
        </div>
    )
}
