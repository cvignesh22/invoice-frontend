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
    return (
        <AuthContext.Provider value={[authData , setAuthdata ]}> 
            {props.children}
        </AuthContext.Provider>
    )
}
