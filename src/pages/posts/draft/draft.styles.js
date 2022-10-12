import styled from "styled-components";

const DraftContainer = styled.div`
    width: 375px;
    height: 384px;
    border-bottom: 0.5px solid #D2D5DA;
    padding: 0px 16px 16px;
    margin-top: 34px;

    .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user_info {
        display: flex;
        gap: 8px;
        /* align-items:center; */
    }

    .user_info img {
        width: 48px;
        height: 48px;
    }

    .username {
        display: flex;
        align-items: center;
        gap: 1px;
    }

    .username h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #1F2937;
    }

    .username p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color:#4B5563;
    }

    .details p {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #1F2937;
    }

    .post {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 12px;
    }

    .post h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #1F2937;
    }

    .post p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #4B5563;
    }

    .post_img {
        margin-top: 16px;
    }

    .post_img img {
        width: 343px;
        height: 160px;
        border-radius: 8px;

    }

    .post_img_3 {
        width: 343px;
        height: 223px;
        background: #DDEAF5;
        border: 0.5px solid #F3F4F6;
        border-radius: 8px;
        margin-top: 50px;
    }

    .post_img_3 img {
        width: 343px;
        height: 223px;
        border-radius: 8px;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
    }

    .footer_details {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .footer_details h3 {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #1F2937;
        background: #F3F4F6;
        border-radius: 17.9272px;
        padding: 4px 12px;
    }

    .footer_details p {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #4B5563;
    }

    .footer_click {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .footer_click img {
        width: 13.33px;
        height: 12.23px;
    }

    .footer_click span {
        font-weight: 400px;
        font-size: 14px;
        line-height: 20px;
        color: #1F2937;
    }

    .increment {
        display: flex;
        align-items: center;
        gap: 4px;
    }
`;
export default DraftContainer;
