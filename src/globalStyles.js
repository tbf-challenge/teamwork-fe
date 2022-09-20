import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // variables
    :root {
        // font variables
        --Base-Family: 'Open Sans', sans-serif;
        --Text-Lg: 18px;
        --Text-Md: 16px;
        --Text-Sm: 14px;
        --Text-Xs: 12px;

        // color variables
        // Base
        --Text-Header-Color: #1F2937;
        --Primary-Color: #1678F3;
        --Secondary-Color: #F39116;
        --Error-Color: #EF4444;
        --Info-Color: #6366F1;
        --Success-Color: #22C55E;
        --Warning-Color: #EAB308;
        --Gray-Color: #6D7280;

        // Neutrals
        --Pure-Black: #000000;
        --Pure-White: #FFFFFF;
        --Text-Header-Color: #131212;
        --Text-Body-Color: #4B5563;
        --Disabled-Color: #D2D5DA;

        // Primary
        --Primary-Color-50: #E8F2FE;
        --Primary-Color-100: #C7DFFC;
        --Primary-Color-200: #9BC5FA;
        --Primary-Color-300: #6CAAF7;
        --Primary-Color-400: #4090F5;
        --Primary-Color-500: #1678F3;
        --Primary-Color-600: #1366CF;
        --Primary-Color-700: #1055AD;
        --Primary-Color-800: #0D448B;
        --Primary-Color-900: #0A366D;

        // Secondary
        --Secondary-Color-50: #FEF4E8;
        --Secondary-Color-100: #FCE5C7;
        --Secondary-Color-200: #FAD09B;
        --Secondary-Color-300: #F7BA6C;
        --Secondary-Color-400: #F5A540;
        --Secondary-Color-500: #F39116;
        --Secondary-Color-600: #CF7B13;
        --Secondary-Color-700: #AD6710;
        --Secondary-Color-800: #8B530D;
        --Secondary-Color-900: #6D410A;

        // Gray
        --Gray-Color-50: #F9FAFB;
        --Gray-Color-100: #F3F4F6;
        --Gray-Color-200: #E5E7EB;
        --Gray-Color-300: #D2D5DA;
        --Gray-Color-400: #9CA3AF;
        --Gray-Color-500: #6D7280;
        --Gray-Color-600: #4B5563;
        --Gray-Color-700: #374151;
        --Gray-Color-800: #1F2937;
        --Gray-Color-900: #111827;

        // Info
        --Info-Color-50: #EEF2FF;
        --Info-Color-100: #E0E7FF;
        --Info-Color-200: #C7D2FE;
        --Info-Color-300: #A5B4FC;
        --Info-Color-400: #818CF8;
        --Info-Color-500: #6366F1;
        --Info-Color-600: #4F46E5;
        --Info-Color-700: #4338CA;
        --Info-Color-800: #3730A3;
        --Info-Color-900: #312E81;

        // Error
        --Error-Color-50: #FEF2F2;
        --Error-Color-100: #FEE2E2;
        --Error-Color-200: #FECACA;
        --Error-Color-300: #FCA5A5;
        --Error-Color-400: #F87171;
        --Error-Color-500: #EF4444;
        --Error-Color-600: #DC2626;
        --Error-Color-700: #B91C1C;
        --Error-Color-800: #991B1B;
        --Error-Color-900: #7F1D1D;

        // Success
        --Success-Color-50: #F0FDF4;
        --Success-Color-100: #DCFCE7;
        --Success-Color-200: #BBF7D0;
        --Success-Color-300: #86EFAC;
        --Success-Color-400: #4ADE80;
        --Success-Color-500: #22C55E;
        --Success-Color-600: #16A34A;
        --Success-Color-700: #15803D;
        --Success-Color-800: #166534;
        --Success-Color-900: #14532D;

        // Warning
        --Warning-Color-50: #FEFCE8;
        --Warning-Color-100: #FEF9C3;
        --Warning-Color-200: #FEF08A;
        --Warning-Color-300: #FDE047;
        --Warning-Color-400: #FACC15;
        --Warning-Color-500: #EAB308;
        --Warning-Color-600: #CA8A04;
        --Warning-Color-700: #A16207;
        --Warning-Color-800: #854D0E;
        --Warning-Color-900: #713F12;
    }

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

        ::-webkit-box-sizing {
        box-sizing: border-box;
        }

    }

    body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        ::-webkit-scrollbar{
        display: none;
        }
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
    }
`;

export default GlobalStyles;
