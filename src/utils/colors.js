import { css } from 'styled-components';

const gradient = 'linear-gradient(100deg, #02aab0, #00cdac)';

export const colors = {
  background: 'linear-gradient(rgb(0,0,0,0.9), rgb(0,0,0,0.86))',
  highlight: '#7DF9FF',
  gradient: gradient,
  font: {
    white: '#fffafa',
    darkGrey: 'rgb(0,0,0,0.61)',
    lightGrey: 'rgb(0,0,0,0.4)',
    black: 'rgb(0,0,0,0.9)',
    gradient: css`
      /* background: linear-gradient(#4cb8c4, #3cd3ad); */
      /* background: linear-gradient(-45deg, #1a2980, #26d0ce); */
      /* background: linear-gradient(100deg, #348f50, #26d0ce); */
      background: ${gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  },
  border: {
    gradient: css`
      border-bottom: 2px solid;
      border-image: ${gradient} 10;
    `
  }
}