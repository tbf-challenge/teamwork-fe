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
        /* background-color: gray; */
    }

    .App{

    }

    h1{
        font-size: 30px;
        /* font-size: 32px; */
    }

`;

export default GlobalStyles;
