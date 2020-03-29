import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  //   renderHeader = () => {
  //   const {header: Header} = this.props;
  //   return (
  //     <header className="header">
  //       <Header/>
  //     </header>
  //   );
  // };

  // renderFooter = () => {
  //   const {footer: Footer} = this.props;
  //   return (
  //     <footer className="footer">
  //       <Footer />
  //     </footer>
  //   );
  // };

  // render() {
  //   const { header: Header, footer: Footer, children } = this.props;
  //   console.log(this.props);
  //   return (
  //     <Fragment>
  //       {Header && this.renderHeader()}

  //       <main
  //         className={`main ${Header ? 'main--with-header' : ''} ${
  //           Footer ? 'main--with-footer' : ''
  //           }`}
  //       >
  //         <SectionTitle className="main__title">Main</SectionTitle>
  //         {children}
  //       </main>

  //       {Footer && this.renderFooter()}
  //     </Fragment>
  //   );
  // }

  getClassName = () => {
    const { header, footer } = this.props;
    if (header && footer) {
      return 'main main--with-header main--with-footer';
    }
    if (header) {
      return 'main main--with-header';
    }
    if (footer) {
      return 'main main--with-footer';
    }
    return 'main';
  };

  render() {
    const { header: Header, footer: Footer, children } = this.props;

    return (
      <React.Fragment>
        {Header && <Header />}
        <main className={this.getClassName()}>{this.props.children}</main>
        {Footer && <Footer />}
      </React.Fragment>
    );
  }
}

export default Layout;
