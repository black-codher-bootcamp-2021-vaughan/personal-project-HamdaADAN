import React from 'react';
// import { Typography, Grid, Container, card, cardMedia, CardHeader, CardContent, IconButton, DeletedOulined } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import NavBar from "./NavBar";
import { CardContent } from '@mui/material';


const Home= () => {

    return (
        
        
        <div>
<CardContent>
          <Typography variant="h5" align="center" color="textsecondary" paragraph> 
            <h3>  A community project directory - here to help you locate exciting people around you! </h3>
              <h5>CommConnect provides a central space for that </h5>
             
          </Typography>
          </CardContent>
        </div>
    );
}

export default Home;