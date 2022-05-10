import React, { useState, useEffect } from "react";
import "./App.css"

import Login from "./Components/login";
import About from "./Components/about";
import VolunteerForm from "./Components/VolunteerForm"
 import Home from "./Components/home";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavBar from "./Components/NavBar"
import { Typography } from '@material-ui/core';
import SearchBar from './Components/searchBar';
import Footer from './Components/footer';
import { CardContent } from "@material-ui/core";
import { Card } from "@material-ui/core";


//import { application } from "express";
  // import {Typography, AppBar, CssBaseline, Toolbar, Container, Button, Grid, Paper, Card, CardMedia, CardContent, CardActions, IconButton, Icon, } from '@material-ui/core';
//  import { makeStyles } from "@material-ui/core/styles";
//  import Menu from "@material-ui/icons/Menu";

// import DeleteIcon from '@mui/icons-material/Delete';
// import SavedSearchIcon from '@mui/icons-material/SavedSearch'; 
//import useStyles from "./styles";
// import NavBar from "./Components/NavBar";
// import {} from "./Components/NavbarElements.sty";
//import SearchBar from './Components/SearchBar';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({});

export default function App ( ){
  // const classes = useStyles();
  return (
    <div> 

    

     <CardContent/>
 <Card/>
 <Typography/>
 <Footer/>
 <CardContent/>
 <SearchBar/>
<div/>
<Router>
<div>
<NavBar/>
  <Route exact path= "/home" component={Home} />
  <Route exact path= "/login" component={Login}/>
  <Route exact path= "/about" component={About}/>
  <Route exact path= "/VolunteerForm" component={VolunteerForm} />
 
</div>
</Router>
  );
  
}
   
 


