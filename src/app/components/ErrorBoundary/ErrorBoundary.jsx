import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon from './error.png';
import styles from '../../../css/error-module.css';

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  };

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.errorIndicator}>
          <img
            className={styles.errorIndicatorImage}
            src={icon}
            alt='error icon'
          />
          <span className={styles.boom}>Boom!</span>
          <span>{this.state.error && this.state.error.toString()}</span>
          <h1>something has gone terribly wrong</h1>
          <span>(but we already sent droids to fix it)</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
