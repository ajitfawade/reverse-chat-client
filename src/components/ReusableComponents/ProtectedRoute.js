import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { path, component, exact } = this.props;
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    return (
      <div>
        {isLoggedIn ? (
          <Route exact={exact || false} path={path} component={component} />
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default ProtectedRoute;
