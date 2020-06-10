import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageurl from './visa.png'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    margin:7,
  },
  black:{
    color: "#000000",
  },
});

export default function Wallet() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageurl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Number: <span className={classes.black}>XXXX XXXX XXXX 2462</span> <br/>
            Holder: <span className={classes.black}>George Baba</span> <br/>
            Valid thru: <span className={classes.black}>06/20X</span> <br/>
            Number: <span className={classes.black}>4 hours ago</span> <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}