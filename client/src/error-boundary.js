import React from 'react';

export default class extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.props.text}</p>;
    }

    return this.props.children;
  }
}
