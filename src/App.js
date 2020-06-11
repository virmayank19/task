import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidedrawer from './components/Sidedrawer'
import { Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import Projects from './components/Projects'
import Contact from './components/Contacts.js'
import Categories from './components/Categories'
import Invoices from './components/Invoices'
import Modules from './components/Modules'

const useStyles = makeStyles((theme) => ({
  root: {
      
    },
  }));    

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item>
          <Header />
          
        </Grid>
        <Grid item container className={classes.root}>
          <Grid item xs={false} sm={2}><Sidedrawer/></Grid>
          <Grid item xs={12} sm={10}>
            <Route exact path="/" ><Dashboard/></Route>
            <Route exact path="/projects" ><Projects/></Route>
            <Route exact path="/contacts" ><Contact/></Route>
            <Route exact path="/categories" ><Categories/></Route>
            <Route exact path="/invoices" ><Invoices/></Route>
            <Route exact path="/modules" ><Modules /></Route>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
