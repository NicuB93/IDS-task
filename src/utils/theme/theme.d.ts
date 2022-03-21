import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    colors: {
      hover: string;
      blueMarin: string;
      green: string;
      red: string;
      gray: string;
      blue: string;
      white: string;
      orange: string;
      lightBlue: string;
    };
  }
}
