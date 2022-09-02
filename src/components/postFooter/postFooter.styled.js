import styled from "styled-components";

const FooterContainer = styled.section`
    margin-top: 20px;
    width: 101.5%;
    margin-left: -10px;
    background-color: white;
    z-index: -10;

    .savedTag {
        background-color: white;
        padding: 5px 12px;
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

    .savedTags {
        display: flex;
        position: absolute;
        width: 250px;
        height: 28px;
        right: 10px;
        top: 20px;
        gap: 8px;
        flex-direction: row-reverse;
    }

    .d-none {
        display: none;
    }

    .types {
        display: flex;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        padding: 15px 0;
        position: relative;

        .uploadButton {
            display: flex;
            align-items: center;
            font-size: 18px;
            position: relative;
            margin-left: 38px;
            overflow: hidden;
            width: fit-content;
            background: transparent;
            border: none;

            img, svg {
                width: 32px;
                height: 32px;
                cursor: pointer;
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
        .options {
            position: absolute;
            top: 65px;
            left: 30px;
            width: 94%;
            background: white;
            z-index: 20;

            .tag-group {
                display: flex;
                gap: 8px;
                position: relative;
                bottom: 40px;
                left: 0;
                overflow-x: hidden;

                .tag {
                    background-color: white;
                    padding: 6px 20px;
                    border: 1px solid #E5E7EB;
                    border-radius: 10px;
                }
            }
            
            input[type="text"] {
                height: 40px !important;
                padding: 6px 20px !important;
            }
            input[type="search"] {
                position: absolute;
                top: 10px;
                left: 0;
                width: 99%;
                height: 48px;
                padding: 5px 10px;
                background-color: white;
                border: 1px solid #E5E7EB;
                border-radius: 4px;
            }
        }
    }

    .categories {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 15px 38px;

        .category {
            padding: 5px 15px;
            border: 1px solid black;
            border-radius: 25px;
            cursor: pointer;
            background-color: white;
        }
    }
    
    @media (max-width: 1100px) {
        .savedTags {
            right: 15px;
        }
    }

    @media (max-width: 850px) {
        input[type="search"] {
            /* width: 98% !important; */
        }
        .savedTags {
            right: 15px;
        }
        .options {
            width: 92% !important;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        z-index: -1;
    }
`;

export default FooterContainer;
