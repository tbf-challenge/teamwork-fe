import styled from "styled-components";

const PublishContainer = styled.div`
    width: 100%;
    height: 384px;
    border-bottom: 0.5px solid #D2D5DA;
    padding: 0px 16px 16px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        height: 534px;
        padding: 0px 24px 16px;
    }
`;
export default PublishContainer;

export const Flex = styled.section`
    display: flex;
`;
