import styled from "styled-components";

export const CategoriesStyles = styled.section`
    width: 742px;
    height: 2,864px;
    background: #FFFFFF;
    /* overflow-y: scroll; */
    /* background-color:red; */   
`;

export const Topbar = styled.nav`
    .topbar{
    width: 742px;
    height: 46px;
    left: 325px;
    top: 160px;
    background: #FFFFFF;
    border-bottom: 0.5px solid #D2D5DA;
    padding: 12px 16px 0px 8px;
    gap: 8px;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        border: none;
    }
    li{
    list-style: none;
    text-decoration: none;
    width: 46px;
    height: 20px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4B5563;
    }

    ul img {
        cursor: pointer;
    }
`;
export const HomeStyles = styled.section`
  width: 766px;
  height: 2913px;
  background: #ffffff;
  border-width: 0px 0.5px;
  border-style: solid;
  border-color: #d2d5da;

  @media screen and (max-width: 768px){
    width: 528px;
    height: 2684px;
  }
`;
export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  padding: 0px 24px 24px;
  gap: 20px;
  width: 766px;
  height: 544px;
  border-bottom: 0.5px solid #d2d5da;
    

    @media screen and (max-width: 768px){
     width: 480px;
     /* height: 416px; */
     /* margin-left: 24px; */
  }

`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    background-color: #ececec;
    margin-bottom: 12px;

    @media screen and (max-width: 768px){
    
  }
`;
export const ProfileText = styled.h3`
   width: 153px;
    height: 28px;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    font-family: Open sans;
    font-style: normal;
    color: #1f2937;

    @media screen and (max-width: 768px){
        font-size: 16px;
        
}
`;
export const ProfileSpan = styled.span`
   width: 67px;
    height: 24px;
    font-size: 18px;
    font-size: 16px;
    line-height: 24px;
    font-family: Open sans;
    font-style: normal;
    color: #4b5563;
    margin-left: -18px;

    @media screen and (max-width: 768px){
       
        margin-left: -30px;

}
`;

export const ProfileSpan2 = styled.span`
   width: 67px;
    height: 24px;
    font-size: 18px;
    font-size: 16px;
    line-height: 24px;
    font-family: Open sans;
    font-style: normal;
    color: #4b5563;
    margin-left: -45px;

    @media screen and (max-width: 768px){
       
        margin-left: -30px;

}
`;
export const Time = styled.p`
  margin-left:350px;
  width: 59px;
  height: 24px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1f2937;

  @media screen and (max-width: 768px){
       
       margin-left: 50px;

}
`;
export const Post = styled.p`
  width: 718px;
  height: 28px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
color: #1F2937;

`;
export const SecondPost = styled.p`
  width: 718px;
  height: 32px;
  font-family: 'Open Sans';
  font-style: normal;
 font-weight: 600;
 font-size: 24px;
 line-height: 32px;
 letter-spacing: -0.02em;
color: #1F2937;
margin-bottom: 8px;

`;
export const Span = styled.span`
  width: 718px;
  height: 28px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1366CF;
  margin-right: 300px;

  @media screen and (max-width: 768px){
       margin-right: 10px;
   }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.div`
  margin-left: 100px;
  margin-top: 10px;

  @media screen and (max-width: 768px){
       margin-left: 70px;
   }
`;
export const SecondImage = styled.div`
  margin-left: 123px;
  margin-top: 19px;

  @media screen and (max-width: 768px){
       margin-left: 70px;
   }
`;
export const ThirdImage = styled.div`
  margin-top: 12px;
  border-radius: 16.5598px;

  @media screen and (max-width: 768px){
       margin-left: 70px;
   }
`;
export const Event = styled.p`
    padding: 4px 12px;
    gap: 4px;
    width: 61px;
    height: 28px;
    background: #F3F4F6;
    border-radius: 17.9272px;
    margin-right: 20px;
    
`;
export const Minutes = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    width: 77px;
    height: 20px;
    color: #4b5563;
    font-size: 15px;
    /* line-height: 10px; */
    margin-left: -390px;
    
`;
export const BottomWrapper = styled.section`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 386px;
    width: 718px;
    height: 28px;
    margin-left: 19px;
    margin-top: -40px;
    margin-bottom: 50px;
    cursor: pointer;

    @media screen and (max-width: 768px){
       gap: 200px;
   }
`;
export const Likes = styled.span`
width: 19px;
height: 24px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #1F2937;
`;
export const ItemWrapper = styled.section`
    display: flex;
    gap: 28px;
    width: 217px;
    height: 24px;
`;
export const Paragraph = styled.p`
  width: 718px;
  height: 48px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #4B5563;

  @media screen and (max-width: 768px){
       margin-right: 10px;
   }
`;
