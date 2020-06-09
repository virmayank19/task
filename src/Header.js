import React from 'react';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import MessageIcon from '@material-ui/icons/Message';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <AppBar position= "static">
        <Toolbar>
            <Typography>This is Our Header</Typography>
            <SearchIcon />
            <InputBase placeholder="Search…" /> 
            
        </Toolbar>
    </AppBar>
  );
}

export default Header;
