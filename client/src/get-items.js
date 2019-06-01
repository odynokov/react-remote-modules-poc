import React from 'react';

export default class FetchItems extends React.Component {
  state = {
    items: []
  }

  async componentDidMount() {
    this.setState({
      items: await this.props.fetchFunction()
    });
  }

  render() {
    return this.state.items.length > 0
      ? this.props.render(this.state.items)
      : <p>{this.props.fallback}</p>;
  }
}
