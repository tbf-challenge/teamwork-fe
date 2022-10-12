import styled from "styled-components";

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-top: 10px;

  .user_info {
    display: flex;
    gap: 8px;
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
`;

export const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  font-family: "Open Sans";

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #1f2937;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4b5563;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Image = styled.section`
  margin-top: 16px;

  img {
    width: 343px;
    height: 160px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 480px;
        height: 280px;
        border-radius: 16.5598px;
    }

    @media screen and (min-width: 1024px) {
      width: 694px;
      height: 320px;
      border-radius: 16.5598px;
  }
  }
`;
export const Reactions = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  @media only screen and (min-width: 768px) {
      margin-top: 20px;
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
    color: #1f2937;
    background: #f3f4f6;
    border-radius: 17.9272px;
    padding: 4px 12px;
  }

  .footer_details p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #4b5563;
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
    color: #1f2937;
  }

  .increment {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export default UserContainer;
