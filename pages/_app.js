import { AuthProvider } from '@/lib/auth'
import { Global, css } from '@emotion/core';

import customTheme from '@/styles/theme';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};



function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme ={customTheme}>
    <AuthProvider>
      <CSSReset />
      <Component {...pageProps}/>
    </AuthProvider>
  </ThemeProvider>
  );
}

export default App
