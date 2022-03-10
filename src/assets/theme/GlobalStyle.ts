import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Mercury G2';
    src: local('Mercury G2'), local('MercuryG2'),
    url("/fonts/MercuryG2.otf") format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ideal Sans Thick';
    src: url("/fonts/IdealSans-Thick.otf")
  }

  @font-face {
    font-family: 'Ideal Sans Medium';
    src: url("/fonts/IdealSans-Medium.otf")
  }

  @font-face {
    font-family: 'Ideal Sans Light';
    src: url("/fonts/IdealSans-Light.otf")
  }

  @font-face {
    font-family: 'Ideal Sans Thin';
    src: url("/fonts/IdealSans-Thin.otf")
  }

  @font-face {
    font-family: 'Helvetica';
    src: url("/fonts/Helvetica.ttf")
  }

  *,
  &::before,
  &::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Ideal Sans Light", sans-serif;
  }
`;
