import styled from "styled-components";

const CreatePostContainer = styled.section`
    display: ${(props) => props.postDisplay};
    /* width: 750px; */
    border-right: 1px solid #D2D5DA;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: 320px;
    padding-top: 10px;
    min-height: 112vh;

    .savedTag {
        background-color: white;
        padding: 3px 10px;
        border: 1px solid #E5E7EB;
        box-shadow: 2px 5px 5px 0px #E5E7EB;
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

    .submitRow {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    h1 {
        font-size: 32px !important;
        font-weight: 600;
        line-height: 40px;
    }

    p {
        font-size: 16px;
        line-height: 24px;
    }

    .back {
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    .back p {
        margin-top: 0;
    }

    .save, .publish {
        width: 30%;
        height: 100%;
        border: none;
        font-weight: 600;
        border-radius: 5px;
    }

    .publish {
        background-color: #bbbaba;
        color: white;
    }

    .save {
        margin-left: 32%;
        background-color: white;
    }

    .user {
        display: flex;
        height: 32px;
        align-items: center;
        margin-top: 10px;

        img {
            /* width: 48px; */
            height: 48px;
            padding-left: 20px;
            padding-right: 10px;
        }

        p {
            font-size: 18px;
            line-height: 28px;
            font-weight: 600;
            color: #1F2937;
        }
    }

    #quillDiv {
        width: 100%;
        min-height: 70vh;
    }

    .ql-container {
        border: none !important;
    }

    .ql-toolbar {
        border: none !important;
        border-bottom: 1px solid #D2D5DA !important;
        padding-bottom: 10px !important;
    }
    label, div#toolbar:nth-child(1) > button:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        position: relative;
        margin: 10px 24px 0;
        overflow: hidden;
        width: fit-content;
        background-color: white;
        cursor: pointer;

        img {
            width:20px;
        }

        input[type="file"] {
            background-color: transparent;
            cursor: pointer;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 120px;
            transform: scaleX(2);
        }
    }

    .ql-editor {
        padding: 20px;
    }

    .ql-formats button {
        height: 36px !important;
        width: 36px !important;
        margin-right: 22.5px;
    }

    .ql-picker-label {
        padding-right: 20px;
    }

    div.ql-toolbar:nth-child(1){
        border-bottom: none !important;
        margin-top: 10px;
        padding-bottom: 0 !important;
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

    @media screen and (max-width: 1100px) {
        margin-right: 180px;
        min-height: 118vh !important;

        span.ql-formats:nth-child(1) {
            margin-right: 15%;
        }
        .save {
            margin-left: 30%;
        }
        .save, .publish {
            width: 35%;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 36px !important;
            line-height: 46px;
        }
        p {
            font-size: 16px;
        }
        .save {
            margin-left: 18%;
        }
        .save, .publish {
            width: 35%;
        }
        span.ql-formats:nth-child(1) {
        /* text-align: start; */
            margin-right: 3%;
        }
        .ql-formats button {
            height: 34px !important;
            width: 36px !important;
            margin-right: 20px;
        }
    }

    @media (max-width: 850px) {
        margin-right: 120px;

        .submitRow {
            width: 100%;
            margin-left: 0;
        }
        .save {
            margin-left: 14%;
        }
        .save, .publish {
            width: 33%;
        }
        span.ql-formats:nth-child(1) {
            display: inline-block;
            margin-bottom: 0;
            margin-right: 6%;
        }
        div.ql-toolbar:nth-child(1) > label:nth-child(1) {
            margin-top: 10px;
        }
        .ql-formats button {
            margin-right: 18px;
            height: 32px !important;
            width: 32px !important;
        }
        .ql-toolbar {
            width: 100%;
            text-align: start;
        }
        .ql-editor {
            padding: 10px 0;
        }
    }

    @media (max-width: 700px) {
        margin-right: 80px;
    }    

    @media (max-width: 600px) {
        margin-right: 0px;
        border-right: none;    
        margin-top: -10px;
        margin-left: 10px;
        min-height: 100vh;

        h1 {
            font-size: 32px !important;
            line-height: 40px;
        }
        p {
            font-size: 14px;
        }
        .container {
            width: 100%;
        }
        .save {
            margin-left: 16%;
        }
        .submitRow {
            margin: 10px 0 0;
            height: 40px;
            padding: 0;
        }
        .ql-editor {
            padding: 10px;
        }
        span.ql-formats:nth-child(1) {
            display: inline-block;
            margin-bottom: 0;
        }
        .ql-formats button {
            margin-right: 8px;
            height: 30px !important;
            width: 32px !important;
        }
        #quillDiv {
            min-height: 400px;
        }
    }

    @media screen and (max-width:426px) {
        margin-top: 0px;

        .save {
            margin-left: 5%;
        }
        .save, .publish {
            width: 36%;
            font-size: 14px;
        }
        .submitRow {
            margin: 0 0 20px;
        }
        div.ql-toolbar:nth-child(1) > label:nth-child(1) {
            margin: 10px;
        }
        span.ql-formats:nth-child(1) {
            display: block;
            padding-bottom: 10px;
        }
        .ql-formats button {
            margin-right: 6px;
            height: 28px !important;
            width: 28px !important;
        }
        div.ql-toolbar:nth-child(2) {
            padding: 8px 0;
        }
    }
`;

export default CreatePostContainer;
