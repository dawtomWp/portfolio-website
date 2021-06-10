import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`



*, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
  

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
// happy rems
html {
    font-size: 62.5%; // dzieki temu 1 rem === 10px a nie 16

}

body {
   font-size: 1.6rem; //sprawiamy zeby dalej byla bazowa fontu wielkosc czaisz nie ?
   font-family: Roboto, sans-serif;

}

`;