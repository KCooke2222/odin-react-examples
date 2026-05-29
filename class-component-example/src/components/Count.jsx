import React, { Component } from 'react';

class Count extends Component {
  render() {
    return <h4>All the tasks! ({this.props.count})</h4>;
  }
}

export default Count;
