import styled from "styled-components";

const PostsStyles = styled.section`

    .chooseSection {
        position: relative;
        margin-left: 100px;
        margin-top: 100px;

        h2 {
            font-weight: 600;
            font-size: 28px;
            line-height: 36px;
            letter-spacing: -0.02em;
            margin-bottom: 32px;
            color: #1F2937;
        }

        .cancel {
            position: absolute;
            background-color: white;
            top: 0;
            right: 0;
            width: 32px;
            cursor: pointer;
        }

        .chooseButtons {
            display: flex;
            gap: 50px;
        
            .choose {
                border: 1px solid #E5E7EB;
                width: 218px;
                background-color: white;
                height: 153px;
                display: flex;
                justify-content: center;
                align-items: center;
                display: flex;
                gap: 12px;
                flex-direction: column;
                cursor: pointer;
            }

            p {
                font-size: 16px;
                line-height: 24px;
                color: #1F2937;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .chooseSection {
            margin-left: 0 !important;
            margin-top: 50px;

            h2 {
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 28px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .chooseButtons {
            margin-left: 20px;
        }

        .choose {
            width: 132px;
            height: 100px;
        }
        
        .cancel {
            top: -50px;
            right: 0;
            height: 40px;
        }
    }
`;

export default PostsStyles;
