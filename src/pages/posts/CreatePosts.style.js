import styled from "styled-components";

const CreatePostContainer = styled.section`
    width: 100%;

    .submitRow {
        width: 95%;
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
        gap: 5px;
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

    #quillDiv {
        width: 100%;
        height: 300px;
    }

    .ql-container {
        border: none !important;
    }

    .ql-toolbar {
        text-align: end;
        border: none !important;
        border-bottom: 1px solid black !important;
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

    .bottom-stuff {
        position: fixed;
        bottom: 10px;
        right: 0;
        width: calc(80% + 5px);

        .types {
            display: flex;
            gap: 16px;
            border-top: 1px solid grey;
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
    }

    @media (max-width: 850px) {
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
            display: block;
            margin-bottom: 10px;
        }
        .ql-formats button {
            margin-right: 12px;
            height: 28px !important;
            width: 30px !important;
        }
        .ql-toolbar {
            width: 102%;
            text-align: start;
        }
        .ql-editor {
            padding: 10px 0;
        }
    }


    @media (max-width: 600px) {
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
            margin-right: 9px;
            height: 24px !important;
            width: 24px !important;
        }
    }

    @media (max-width: 500px) {
        .bottom-stuff {
            width: 100%;
    }
    }
`;

export default CreatePostContainer;
