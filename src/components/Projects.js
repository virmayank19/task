import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:100,
    overflow: 'hidden',
    marginLeft:240,
    padding: theme.spacing(0, 3),
  },
}));

const message = `1234. `;

 const Projects=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" >Projects page</Typography>
    </div>
  );
}
export default Projects;