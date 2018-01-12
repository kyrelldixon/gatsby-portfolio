import { css } from 'styled-components';

const gradientHighlight = 'linear-gradient(100deg, #02aab0, #00cdac)';
const gradientBlack = 'linear-gradient(#121212, #242424)';

export const colors = {
  background: gradientBlack,
  highlight: '#7DF9FF',
  gradient: gradientHighlight,
  font: {
    white: '#fff',
    offWhite: '#e0e0e0',
    grey: '#7e7e7e',
    darkGrey: 'rgb(0,0,0,0.61)',
    lightGrey: '#9c9c9c',
    xlightGrey: '#bbb',
    black: 'rgb(0,0,0,0.9)',
    gradient: css`
      /* background: linear-gradient(#4cb8c4, #3cd3ad); */
      /* background: linear-gradient(-45deg, #1a2980, #26d0ce); */
      /* background: linear-gradient(100deg, #348f50, #26d0ce); */
      background: ${gradientHighlight};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  },
  border: {
    gradient: css`
      border: 2px solid;
      border-image: ${gradientHighlight} 10;
    `
  }
}