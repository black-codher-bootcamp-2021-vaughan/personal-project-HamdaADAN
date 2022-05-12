import React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import {Typography} from '@mui/material';
import { IconButton, makeStyles} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import {AccountCircle} from '@material-ui/core/Icon';
import { MenuItem } from '@mui/material';
import {Menu} from '@mui/material';
import { Link, Router } from "react-router-dom";


 
const useStyles = makeStyles(theme => ({
root: {
    flexGrow:1
},
menuButton: {
    marginRight: theme.spacing(2)
},
title: {
    flexGrow:1
}

}));

export default function MenuAppBar() {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }; 

  return (
    <div className={classes.roots}> 
    <AppBar position="sticky" style={{backgroundColor: "orange"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            community connect
          </Typography>
         
            <div>
              <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label='menu'
               onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
        
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem LinkComponent={Link} to='/home'>Home</MenuItem>
                <MenuItem LinkComponent={Link} to='/About'>About</MenuItem>
                <MenuItem onClick={handleClose}>VolunteerForm</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Menu>
              
            </div>
          
        </Toolbar>
      </AppBar>
      </div>
  );
}



 



