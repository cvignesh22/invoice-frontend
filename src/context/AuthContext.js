import React , {useState}from 'react'

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const [authData , setAuthdata] = useState(
        {
            userName: "",
            role: "",
            token:"",
        }
    )
    const authcheck = () => {
        const  auth = JSON.parse(localStorage.getItem("auth"))
        if (!auth || !auth.token) {
            return false;
        } else {
            return true
        }
    }
    return (
        <AuthContext.Provider value={[authData , setAuthdata , authcheck  ]}> 
            {props.children}
        </AuthContext.Provider>
    )
}
