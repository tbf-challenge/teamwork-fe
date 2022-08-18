import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        width: 99.9%;
    }
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        width: 99.9%;
        box-sizing: border-box;
        /* background-color: gray; */
    }
    
    .App{
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
