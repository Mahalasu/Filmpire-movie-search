import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

import { NavBar, Actor, Movie, MovieInfo, Profile } from '.';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolBar} />
        <Switch>
          <Route path="/" exact>
            <Movie />
          </Route>
          <Route path="/movie/:id" exact>
            <MovieInfo />
          </Route>
          <Route path="/actor/:id" exact>
            <Actor />
          </Route>
          <Route path="/profile/:id" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
