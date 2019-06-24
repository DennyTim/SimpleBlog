import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostContainer from '../../containers/PostContainer';
import PostsContainer from '../../containers/PostsContainer';
import Navbar from '../Layout/Navbar.jsx';
import Home from '../Pages/Home.jsx';
import NotFound from '../Pages/NotFound.jsx';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={PostsContainer} />
        <Route exact path='/post/:id' component={PostContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
