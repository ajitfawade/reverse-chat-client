import React, { PureComponent } from 'react';
import { FacebookProvider, Login as LoginButton } from 'react-facebook';
import './Login.scss';

export default class Login extends PureComponent {
  handleResponse = data => {
    console.log('Handle Response: Data:', data);
  };

  handleError = error => {
    console.error('Error:', error);
  };
  render() {
    return (
      <div>
        <FacebookProvider appId="272441676793214">
          <LoginButton
            scope="email"
            onCompleted={this.handleResponse}
            onError={this.handleError}
          >
            {({ loading, handleClick, error, data }) => (
              <span className="facebook-login-button" onClick={handleClick}>
                Login via Facebook
                {loading && <span>Loading...</span>}
              </span>
            )}
          </LoginButton>
        </FacebookProvider>
      </div>
    );
  }
}
