import React from 'react';
import './App.css';
import Header from './Header'
import Sidedrawer from './Sidedrawer'
import { Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Dashboard from "./Dashboard"
const useStyles = makeStyles((theme) => ({
  root: {
      
    },
  }));    

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
        
      </Grid>
      <Grid item container className={classes.root}>
        <Grid item xs={false} sm={2}><Sidedrawer/></Grid>
        <Grid item xs={12} sm={10}>
          <Dashboard/>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
