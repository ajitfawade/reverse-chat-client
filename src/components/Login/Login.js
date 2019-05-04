import React, { PureComponent } from 'react';
import { FacebookProvider, Login as LoginButton } from 'react-facebook';
import './Login.scss';

export default class Login extends PureComponent {
  componentWillMount() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      this.props.history.push('/');
    }
  }
  handleResponse = data => {
    console.log('Handle Response: Data:', data);
  };

  handleError = error => {
    console.error('Error:', error);
  };

  handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    console.log('Props:', this.props);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="facebook-login-button">
        {/* <FacebookProvider appId="272441676793214">
          <LoginButton
            scope="email"
            onCompleted={this.handleResponse}
            onError={this.handleError}
          >
            {({ loading, handleClick, error, data }) => (
              <span onClick={handleClick}>
                Login via Facebook
                {loading && <span>Loading...</span>}
              </span>
            )}
          </LoginButton>
        </FacebookProvider> */}
        <span onClick={this.handleLoginSuccess}>Login Via Facebook</span>
      </div>
    );
  }
}
