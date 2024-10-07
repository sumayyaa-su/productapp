import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"#624E88"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 125 }}>
            USERAPP
          </Typography>
         <Link to={'/'}><Button style={{color:"#91DDCF"}} >HOME</Button></Link>
         <Link to={'/add'}><Button style={{color:"#91DDCF"}}>ADD</Button></Link> 
        </Toolbar>
      </AppBar>
    </Box>
  

  )
}

export default Navbar