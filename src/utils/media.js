import { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 480px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 720px) {
      ${ css(...args)}
    }
  `,
}