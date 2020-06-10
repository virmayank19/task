import React from 'react';
import {Drawer,Toolbar,Typography} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import CreateIcon from '@material-ui/icons/Create';
import List from '@material-ui/core/List';
import { fade, makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Avatar from '@material-ui/core/Avatar';
import imageurl from "./logo1.png"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  searchbar:{
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '15%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  logo:{
    width:240,
  }
}));

const Sidedrawer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>      
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          <div>
            <ListItem>
              <Avatar alt="Remy Sharp" src={imageurl} variant="square" className={classes.logo}/>
            </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Invoices" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ViewModuleIcon />
            </ListItemIcon>
            <ListItemText primary="Modules" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </div>
      </Drawer>
      </div>
    );
  }
  
  export default Sidedrawer;