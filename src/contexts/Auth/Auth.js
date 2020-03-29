import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    // Функция authorize c верными аргументами › Меняет state.isAuthorized на true
    if (email === 'stu@dent.com' && password === '123') {
      return this.setState({ isAuthorized: true, authorizeError: '', email });
    }
    this.setState({ authorizeError: 'Email или пароль введён не верно' });
  };

  logout = () => {
    this.setState({ isAuthorized: false });
  };

  getProviderValue = () => {
    const { email, isAuthorized, authorizeError, logout } = this.state;
    return {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
