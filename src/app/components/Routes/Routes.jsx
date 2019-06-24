import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from '../Posts';
import Post from '../Post';
import Navbar from '../Layout/Navbar.jsx';
import Home from '../Pages/Home.jsx';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/post/:id' component={Post} />
      </Switch>
    </Router>
  );
};

export default Routes;
