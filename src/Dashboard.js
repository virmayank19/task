import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Overview from './Overview'
import Projects from './Projects'
import Wallet from './Wallet'
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:100,
    overflow: 'hidden',
    marginLeft:10,
    padding: theme.spacing(0, 3),
  },
  typoproject: {

    marginLeft: 10,
    paddingTop:40,
  },
}));

const message = `1234. `;

 const Dashboard=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography >Overview</Typography>
        <Overview/>
      
      <Grid  container spacing={4}>
        <Grid item xs={12} sm={8} > 
            <Typography className={classes.typoproject}>Projects</Typography>
            <Projects/>
        </Grid>
        <Grid item xs={12} sm={4} > 
            <Typography className={classes.typoproject}>Wallet</Typography>
            <Wallet/>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;