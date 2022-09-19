import styled from "styled-components";

const CreateGIFContainer = styled.section`
    display: ${(props) => props.postGIF};
    border-right: 1px solid #D2D5DA;
    margin-top: -35px;
    margin-left: -20px;
    margin-right: 350px;
    padding-top: 10px;
    height: 95vh;

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
        width: 90%;
        height: 30vh;
        overflow-y: hidden;

        textarea {
            outline: none;
            padding: 10px;
            z-index: 0;
        }
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
        min-height: 100vh !important;


        .save {
            margin-left: 16%;
        }
        .save, .post {
            width: 30%;
        }
    }

    @media (max-width: 1024px) {
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
    }


    @media (max-width: 600px) {
        margin-right: 0px;
        border-right: none;
        margin-top: -25px;
        margin-left: 0px;
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
            width: 80%;
        }
        .bottom-stuff {
            width: 100%;
            z-index: -1;
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
