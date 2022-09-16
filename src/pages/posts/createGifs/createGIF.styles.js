import styled from "styled-components";

const CreateGIFContainer = styled.section`
    border-right: 1px solid #D2D5DA;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: 320px;
    padding-top: 10px;
    min-height: 112vh;

    .submitRow {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    .back {
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    .back p {
        margin-top: 0;
    }

    .save, .post {
        width: 26%;
        height: 100%;
        border: none;
        font-weight: 600;
        border-radius: 5px;
    }

    .post {
        background-color: #bbbaba;
        color: white;
    }

    .save {
        margin-left: 35%;
        background-color: white;
    }

    .user {
        display: flex;
        height: 32px;
        align-items: center;
        margin-top: 30px;

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
    .user + div {
        background-color: white;
        margin: 25px 20px;
        padding: 10px;
        width: 95%;
        min-height: 50vh;
        overflow-y: hidden;

        textarea {
            outline: none;
            padding: 10px;
            z-index: 0;
        }
    }

    /* .savedTag {
        background-color: white;
        padding: 3px 10px;
        border: 1px solid #9CA3AF;
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
    } */

    @media screen and (max-width: 1100px) {
        margin-right: 180px;
        min-height: 113vh !important;

        .save {
            margin-left: 16%;
        }
        .save, .post {
            width: 30%;
        }
    }

    @media (max-width: 1000px) {
        .save {
            margin-left: 14%;
        }
        .save, .post {
            width: 35%;
        }
    }

    @media (max-width: 850px) {
        margin-right: 120px;

        .submitRow {
            width: 100%;
            margin-left: 0;
        }
        .save {
            margin-left: 10%;
        }
        .save, .post {
            width: 33%;
        }
        .user + div {
            width: 90%;
        }
    }


    @media (max-width: 600px) {
        margin-right: 0px;
        border-right: none;
        margin-top: -10px;
        margin-left: 10px;
        min-height: 50vh;

        .container {
            width: 100%;
        }
        .save {
            margin-left: 10%;
        }
        .save, .post {
            width: 35%;
        }
        .submitRow {
            margin: 10px 0 0;
            height: 40px;
            padding: 0;
        }
        .user + div {
            width: 90%;
        }
    }

    @media screen and (max-width:426px) {
        .save {
            margin-left: 0%;
        }
        .save, .post {
            width: 40%;
            font-size: 14px;
        }
        .submitRow {
            margin: 0 0 20px;
        }
    }
`;

export default CreateGIFContainer;
