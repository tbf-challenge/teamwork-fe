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
    .savedTag {
        background-color: white;
        padding: 3px 10px;
        border: 1px solid black;
        border-radius: 15px;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 10px;

        button {
            cursor: pointer;
            background-color: white;
            font-weight: 700;
        }
    }
`;

export default GlobalStyles;
