import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import './react.less';

const img = require('../../img/react-logo.png');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateX: 'Is state X',
      count: 0
    };
    this.addCount = this.addCount.bind(this);
  }
  componentDidMount() {
    console.log('App Did mount');
  }
  addCount() {
    this.setState({
      count: ++this.state.count
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.stateX} - {this.state.count}</h1>
        <button onClick={this.addCount}>{this.state.count} + 1</button>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

App.defaultProps = {
  name: 'Zac',
};

App.propTypes = {
  name: PropTypes.string
};

render(
  <App />,
  document.getElementById('react-app')
);

