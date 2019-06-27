import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

const withErrorBoundary = Component => {
  const Wrapper = props => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  Wrapper.displayName = 'Error Boundry';
  return Wrapper;
};

export default withErrorBoundary;
