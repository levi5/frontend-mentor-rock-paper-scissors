import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
}
body{
    font-family:--apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body, #__next{
    height:100%;
}

`;

export default GlobalStyle;
