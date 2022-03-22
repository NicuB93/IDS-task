import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/utils/theme/GlobalStyle";
import { theme } from "../src/utils/theme/theme";
import "../src/utils/theme/fonts.css";

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
