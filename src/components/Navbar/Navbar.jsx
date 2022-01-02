import React   , {useContext}from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';


export default function Navbar() {
  const [,,authcheck] = useContext(AuthContext)
  const auth = authcheck();
  if(auth) {
    return (

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "var(--blue)" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <span color="inherit">Invoice Mangement</span>
              <Link to="dashboard" sx={{textDecoration : "none"}}>
                <Button sx={{ marginLeft: "20px", color : "white" , textTransform : "none" }}>Dashboard</Button>
              </Link>
              <Link to="new" sx={{textDecoration : "none"}}>
                <Button sx={{ marginLeft: "20px", color : "white" , textTransform : "none" }}>New Invoice</Button>
              </Link>
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  } else {
    return (<></>)
  }
}
