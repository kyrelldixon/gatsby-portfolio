import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Page from '../components/Page';

import './normalize-7.0.0.css';
import '../utils/global-styles';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {}

  render() {
    const { pathname } = this.props.location;
    return (
      <AppWrapper>
        <Helmet
          title="Kyrell Dixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header location={pathname}/>
        <Page>
          {this.props.children()}
        </Page>
      </AppWrapper>
    )
  }
} 

App.propTypes = {
  children: PropTypes.func,
}

export default App
