import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Page from '../components/Pages/Page';
import Footer from '../components/Footer';
import { colors } from '../utils/colors';

import './normalize-7.0.0.css';
import '../utils/global-styles';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.font.white};
`;

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = { 
    mobileNavActive: false,
    atTop: false
  }

  handleClick = () => {
    const { mobileNavActive } = this.state;
    this.setState({ mobileNavActive: !mobileNavActive });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = ({ pageY }) => {
    // number represents the y value for window
    // 0-5 will be the acceptable range for top of window
    const pageTop = 5;
    this.setState({ atTop: (pageY <= pageTop)});
  };

  render() {
    const { pathname } = this.props.location;
    const { mobileNavActive, atTop } = this.state;

    return (

      <AppWrapper>
        <Helmet
          title="Kyrell Dixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
        </Helmet>
        <Navbar atTop={atTop} handleClick={this.handleClick} mobileNavActive={mobileNavActive}/>
        <Header handleClick={this.handleClick} mobileNavActive={mobileNavActive} location={pathname}/>
        <Page>
          {this.props.children()}
        </Page>
        <Footer />
      </AppWrapper>
    )
  }
} 

App.propTypes = {
  children: PropTypes.func,
}

export default App
