import React from 'react';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import MessageIcon from '@material-ui/icons/Message';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  searchbar:{
    marginLeft:50,
  },
  messageIcon:{
    marginLeft:380,
    color:"grey",
  },
  notificationIcon:{
    marginLeft:45,
    color:"grey",
  },
  identityIcon:{
    marginLeft:45,
    color:"grey",
  },
  title:{
    fontSize:20,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="white" className={classes.appBar} >
      <Toolbar>
        <Typography variant="title" className={classes.title}>Dashboard</Typography>
            <div className={classes.searchbar}>
              <SearchIcon/>
              <InputBase placeholder="search contacts,projects,invoices,tasks or categories "/>
            </div>
            <div className={classes.messageIcon}>
              <MessageIcon/>
            </div>
            <div className={classes.notificationIcon}>
              <NotificationsIcon/>
            </div>
            <div className={classes.identityIcon}>
              <PermIdentityIcon/>
            </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
