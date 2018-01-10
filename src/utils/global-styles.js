import { injectGlobal } from 'styled-components';

injectGlobal`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, body > div {
    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
  }
`