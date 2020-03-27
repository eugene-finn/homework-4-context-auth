import React, { Component } from 'react';

class RefsExample extends Component {
  // exampleRefs = React.createRef(); // объявляем Refs как поле класса

  constructor(props) {
    super(props);
    this.exampleRefs = React.createRef();
  }

  componentDidMount() {
    console.log(this.exampleRefs.current);
  }

  render() {
    return <div ref={this.exampleRefs} />;
  }
}

export default RefsExample;
