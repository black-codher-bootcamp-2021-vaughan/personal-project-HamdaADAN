import { Avatar, Grid, TextField, Typography, Link,} from '@material-ui/core';
import React from 'react';
import {Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';


const Login=() => {
    const paperStyle={padding :10, height:'70vh', width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnstyle={margin: '8px 0', backgroundColor: 'black'}
    return (
       <Grid>
           <Paper elevation={20} style={paperStyle}>
               <Grid align="center">
               <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
              <h2> Sign in </h2>
              </Grid>
              <TextField label = 'Username' placeholder='Enter Username' fullWidth required/>
              <TextField label = 'password' placeholder='Enter Password' type='Password' fullWidth required/>
              <FormControlLabel
        control={
          <Checkbox
            name="CheckedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      
      <Button type ='submit' color='primary' variant="contained" style={btnstyle} fullWidth> Sign in </Button> 
      <Typography> <Link href="#">
          Forgot Password?
    </Link>
      </Typography> Do you have an account? 
      <Typography> <Link href="#">
          Sign up
    </Link>
      </Typography>
           </Paper>
       </Grid>
    )
}
export default Login;
