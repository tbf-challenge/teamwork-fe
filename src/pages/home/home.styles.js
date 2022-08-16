import styled from "styled-components";

export const HomeStyles = styled.section`
  width: 766px;
  height: 2913px;
  overflow-y: scroll;
  background: #ffffff;
  border-width: 0px 0.5px;
  border-style: solid;
  border-color: #d2d5da;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`;
export const Paragraph = styled.p`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-feature-settings: "salt" on;
  color: ${(props) => props.color};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  text-align: ${(props) => props.textAlign};
`;
export const Image = styled.img`
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
`;
