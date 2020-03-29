import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <AuthConsumer>
          {({ email, isAuthorized, logout }) =>
            isAuthorized ? (
              <div>
                <p className="footer-message t-footer">Вы вошли как {email}</p>
                <button className="t-logout" onClick={logout}>
                  Exit
                </button>
              </div>
            ) : (
              <p className="footer-message t-footer">Вы гость в этой системе</p>
            )
          }
        </AuthConsumer>
      </footer>
    );
  }
}

export default Footer;
