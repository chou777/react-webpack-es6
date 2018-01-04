import React from 'react';
import { render } from 'react-dom';
import Layout from '../layout/layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section">123</div>
      </Layout>
    );
  }
}

render(
  <App />,
  document.getElementById('react-app')
);

