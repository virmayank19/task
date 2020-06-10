import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green, blue,orange } from '@material-ui/core/colors';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MenuIcon from '@material-ui/icons/Menu';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth:300,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: '#fff',
    backgroundColor: blue[500],
  },
  orange: {
    color: '#fff',
    backgroundColor: orange[500],
  },
}));

const message = `12345 `;

const Overview=() => {
  const classes = useStyles();

  return (
    <Grid  container spacing={4}  >
    <Grid item xs={12} sm={4} > 
        <Grid className={classes.root} container spacing={2}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              <Avatar className={classes.blue}>
                <MenuIcon />
              </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6">12</Typography>
                <Typography variant="p">Project tasks</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Grid>
    <Grid item xs={12} sm={4} > 
        <Grid className={classes.root} container spacing={2}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              <Avatar className={classes.orange}>
                <PaymentIcon />
              </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6">$12,852</Typography>
                <Typography variant="p">Total Income</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Grid>
    <Grid item xs={12} sm={4} > 
        <Grid className={classes.root} container spacing={2}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              <Avatar className={classes.green}>
                <WorkOutlineIcon />
              </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6">$543</Typography>
                <Typography variant="p">Funds Spend</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Grid>
  </Grid>
  );
}
export default Overview;