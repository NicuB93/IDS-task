import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

  

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ideal Sans Light",
                  sans-serif;
  }
`;
