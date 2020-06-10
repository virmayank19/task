import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { purple, blue,grey,green } from '@material-ui/core/colors';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import { findByLabelText } from '@testing-library/react';


const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginTop: 12,
    },
    marketing:{
      background:purple[100],
      color:purple[800],
      height:20,
      marginBottom:10,
    },
    webd:{
        background:blue[100],
        color:blue[800],
        height:20,
    },
    addbtn:{
      color:grey[300],
      marginTop:10,
    },
    addworker:{
      marginLeft:20,
      paddingBottom:10,
      fontSize:15 ,
    },
    date:{
      marginTop:10,
      fontSize:16
    },
    blue:{
      color:blue[500],
    },
    pos1:{
      display:'flex',
      marginTop:30,
    },
    green:{
      background:green[300], 
      marginRight:5,
    }
  });
  
  export default function Projects() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
     <Grid container spacing={4}>
      <Grid item xs={12} sm={6} > 
        <Card className={classes.root}>
            <CardContent>
            <Button variant="contained"  className={classes.marketing} disableElevation>
              Marketing
            </Button>
            <Typography variant="h6" >
                From testers e-mail list
            </Typography>
            <Typography variant="h10" color="textSecondary">
                {bull}Send testers invitaion mail
            </Typography>
            <br/>
            <Typography variant="h10" color="textSecondary">
                {bull}Send 5 testers from candid...
            </Typography>
            <div className={classes.pos}>
             < AddCircleSharpIcon fontSize="large" className={classes.addbtn}/>
             <Typography variant="h10" color="textSecondary" className={classes.addworker}>No Workers</Typography>
            </div>
            <div className={classes.date} >
              <CalendarTodaySharpIcon/>  Deadline <span className={classes.blue}>31 July,2019</span>
            </div>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} > 
        <Card className={classes.root}>
            <CardContent>
            <Button variant="contained"  className={classes.webd} disableElevation>
              Web Development
            </Button>
            <Typography variant="h6" >
                From testers e-mail list
            </Typography>
            <Typography variant="h10" color="textSecondary">
                {bull}Design the activation and reset.....
            </Typography>
            <br/>
            <Typography variant="h10" color="textSecondary">
                {bull}Edit account functionality
            </Typography>
            <div className={classes.pos1}>
                <Avatar className={classes.green} alt="Remy Sharp" src="/logo.svg" />
                <Avatar className={classes.green} alt="Remy Sharp" src="/logo1.png" />
            </div>
            <div className={classes.date} >
              <CalendarTodaySharpIcon/>  Deadline <span className={classes.blue}>31 July,2019</span>
            </div>
            </CardContent>
        </Card>
      </Grid>
      </Grid>
    );
  }