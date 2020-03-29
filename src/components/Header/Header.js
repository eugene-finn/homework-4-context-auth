import React, { PureComponent } from 'react';
import './Header.css';
import { AuthConsumer } from '../../contexts/Auth';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-menu">
          <AuthConsumer>
            {({ isAuthorized, email, logout }) =>
              isAuthorized ? (
                <div className="header__content">
                  <p className="t-header-email">{email}</p>
                  <button className="t-logout" onClick={logout}>
                    Exit
                  </button>
                </div>
              ) : null
            }
          </AuthConsumer>
        </div>
      </header>
    );
  }
}

export default Header;
