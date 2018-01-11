import { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 720px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 721px) and (max-width: 1000px) {
      ${ css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1001px) {
      ${ css(...args)}
    }
  `
}