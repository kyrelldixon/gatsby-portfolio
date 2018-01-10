import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Page from '../components/Page';

import './normalize-7.0.0.css';
import '../utils/global-styles';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Helmet
          title="Kyrell Dixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <Page>
          {this.props.children()}
        </Page>
      </div>
    )
  }
} 

App.propTypes = {
  children: PropTypes.func,
}

export default App
