import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        height: 100%;
    }

    #root{
        width: 100%;
        height: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        /* background-color: gray; */
    }
    
    .App{
        box-sizing: border-box;
        height: 100%;
    }

    :root {
        --Text-Header-Color: #1F2937;
        --Primary-Color: #1678F3;
        --Pure-White: #FFFFFF;
        --Gray-Color-300: #D2D5DA;
        --Gray-Color-400: #9CA3AF;
        --Error-Color: #EF4444;
    }
`;

export default GlobalStyles;
