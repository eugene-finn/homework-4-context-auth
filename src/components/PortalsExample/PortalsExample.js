import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortalExample extends Component {
  state = {
    isShowModal: false
  };

  togleModal = () => {
    this.setState(state => ({ isShowModal: !state.isShowModal }));
  };
  render() {
    const { isShowModal } = this.state;
    console.log(isShowModal);

    return (
      <div>
        <button onClick={this.togleModal}>Open modal window</button>
        {isShowModal && (
          <ModalWindow show={isShowModal}>
            <p>it's modal window</p>
            <button onClick={this.togleModal}>Close modal window</button>
          </ModalWindow>
        )}
      </div>
    );
  }
}

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.id = 'modalPortal';
    this.div = document.createElement('div');
    this.div.id = this.id;

    document.body.insertAdjacentElement('beforeend', this.div);
  }

  componentWillUnmount() {
    this.div.parentNode.removeChild(this.div);
  }

  render() {
    const { show, children } = this.props;
    return show
      ? ReactDOM.createPortal(children, document.getElementById(this.id))
      : null;
  }
}

export default PortalExample;
