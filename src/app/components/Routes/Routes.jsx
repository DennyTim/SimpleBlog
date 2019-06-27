import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostContainer from '../../containers/PostContainer';
import PostsContainer from '../../containers/PostsContainer';
import Navbar from '../Layout/Navbar.jsx';
import Home from '../Pages/Home.jsx';
import NotFound from '../Pages/NotFound.jsx';
import ErrorBoundary from '../ErrorBoundary';

const Routes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={PostsContainer} />
          <Route exact path='/post/:id' component={PostContainer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default Routes;
