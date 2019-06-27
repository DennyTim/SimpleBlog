import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object
};

export default App;
