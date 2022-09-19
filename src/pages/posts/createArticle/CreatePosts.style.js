import styled from "styled-components";

const CreatePostContainer = styled.section`
    display: ${(props) => props.postDisplay};
    /* width: 750px; */
    border-right: 1px solid #D2D5DA;
    margin-top: -35px;
    margin-left: -20px;
    margin-right: 350px;
    padding-top: 10px;
    min-height: 95vh;

    .submitRow {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    h1 {
        font-size: 40px !important;
        font-weight: 600;
        line-height: 56px;
    }

    p {
        font-size: 18px;
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
        width: 26%;
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
        margin-left: 40%;
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
        height: auto;
    }

    .ql-container {
        border: none !important;
    }

    .ql-toolbar {
        border: none !important;
        border-bottom: 1px solid #D2D5DA !important;
        padding-bottom: 10px !important;
    }
    label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        position: relative;
        margin-left: 20px;
        overflow: hidden;
        width: fit-content;

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

    .bottom-stuff {
        position: fixed;
        bottom: 10px;
        right: 0;
        width: 80%;
        background-color: white;

        .types {
            display: flex;
            gap: 16px;
            border-bottom: 1px solid grey;
            padding: 12px 16px;

            img {
                width: 32px !important;
                cursor: pointer;
            }
        }

        .categories {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;

            .category {
                padding: 5px 15px;
                border: 1px solid black;
                border-radius: 25px;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 1100px) {
        margin-right: 180px;
        height: 120vh !important;

        span.ql-formats:nth-child(1) {
            margin-right: 15%;
        }
        .save {
            margin-left: 16%;
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


    @media (max-width: 600px) {
        margin-right: 0px;
        border-right: none;    
        margin-top: -25px;
        margin-left: 0px;
        min-height: 80vh;

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
            margin-left: 10%;
        }
        .save, .publish {
            width: 35%;
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
        .bottom-stuff {
            width: 100%;
            z-index: -1;
        }
        #quillDiv {
            height: 500px;
        }
    }

    @media screen and (max-width:426px) {
        .save {
            margin-left: 0%;
        }
        .save, .publish {
            width: 40%;
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
