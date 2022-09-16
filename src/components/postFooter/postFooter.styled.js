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
        display: none !important;
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
                height: 44px;
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

export const GifDisplayContainer = styled.section`
    display: ${(props) => props.displayTenor};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0,0,0,0.2);

    .mainpart {
        min-width: 375px;
        width: 80%;
        max-width: 750px;
        position: relative;
        margin: 7px auto 0;
        background-color: white;
        height: 98vh;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
        border-radius: 8px;

        .searchResults, .singleCategory {
            position: absolute;
            top: 70px;
            left: 0;
            padding: 0 1%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            height: auto;
            gap: 6px;
            justify-content: space-between;
            transform: translateX(105%);
            transition: all 1s;

            img, .preview_gif {
                width: 49%;
                height: 200px;
                cursor: pointer;
                border-radius: 16px;
                transition: all 700ms;
            }
        }
        .singleCategory {
            background-color: whitesmoke;

            .backButton {
                position: absolute;
                top: -5.5%;
                left: 20px;
                background-color: white;
                font-size: 18px;
                font-weight: 600;
                padding: 14px 7px;
                border-radius: 50%;
                cursor: pointer;

                img {
                    width: 100%;
                    /* height: 100%; */
                    height: 200px;
                }
            }
        }

        .top-section {
            display: flex;
            padding: 10px 20px;
            gap: 20px;
            border-bottom: 1px solid #E5E7EB;

            input[type="search"] {
                width: 93%;
                height: 44px;
                padding: 5px 10px;
                background-color: white;
                border: 2px solid #E5E7EB;
                border-radius: 4px;
            }

            .cancel {
                background-color: white;
                width: 7%;
                cursor: pointer;
            }
        }
    }
    .categoriesSection {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 5px;
        grid-auto-rows: 200px;
        gap: 6px;
        transform: translateX(0%);
        transition: all 1s;
        
        .cat_link {
            cursor: pointer;
            position: relative;
            list-style-type: none;

            img {
                width: 100%;
                height: 100%;
                border-radius: 16px;
                transition: all 700ms;
            }
    
            .title {
                text-align: center;
                position: absolute;
                bottom: 3%;
                left: 5%;
                color: #1678F3;
                font-weight: 700;
                font-size: 24px;
            }
        }
    }
    img:hover, .preview_gif:hover {
        border-radius: 0px !important;
    }
    @media (max-width: 600px) {
        .categoriesSection {
            grid-auto-rows: 135px;
        }
        .preview_gif {
            height: 135px !important;
        }
        .mainpart {
            width: 90%;
        }
    }
`;

export default FooterContainer;
