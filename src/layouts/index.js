import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Page from '../components/Pages/Page';

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
  
  state = { mobileNavActive: false }

  handleClick = () => {
    const { mobileNavActive } = this.state;
    this.setState({ mobileNavActive: !mobileNavActive });
  }

  render() {
    const { pathname } = this.props.location;
    const { mobileNavActive } = this.state;

    return (

      <AppWrapper>
        <Helmet
          title="Kyrell Dixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navbar handleClick={this.handleClick} mobileNavActive={mobileNavActive}/>
        <Header handleClick={this.handleClick} mobileNavActive={mobileNavActive} location={pathname}/>
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
