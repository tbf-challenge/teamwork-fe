import styled from "styled-components";

const InputContainer = styled.div`
    * {
        border: unset;
    }

    position: relative;
    height: 100px;
    width: ${(props) => props.width};
    border: none !important;
    background-color: transparent;

    label {
        font-size: 18px !important;
        border: none !important;
        font-weight: 600;
    }

    input {
        border: ${(props) => props.border};
        width: 100%;
        font-size: 14px;
        height: 48px;
        padding: 12px 43px;
        display: block;
        margin-top: 5px;
        outline: none;
        color: ${(props) => props.color};
        
        &::placeholder {
            color: ${(props) => props.color};
        }
    }

    img {
        border: none !important;
        width: 20px;
        fill: ${(props) => props.color};
    }
    .statusText {
        border: none;
        display: flex;
        padding-top: 2px;
    }

    .iconLeft {
        position: absolute;
        top: 38%;
        left: 10px;
    }

    .iconRight {
        position: absolute;
        top: 38%;
        right: 10px;
    }

    p {
        border: none !important;
        /* width: 50%; */
    }

    .statusText > p:nth-child(2) {
        text-align: end;
    }
`;

export default InputContainer;
