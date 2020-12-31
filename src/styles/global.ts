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
    font-family: 'Barlow Semi Condensed', --apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body, #__next{
    width:100%;
    height:100%;
}
h1, h2,h3,h4,h5{
    font-family: 'Barlow Semi Condensed', sans-serif;
}
img{
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
}

button, li{
    list-style:none;
}
button{
    outline:none;
    border:0;
    cursor:pointer;
}

`;

export default GlobalStyle;
