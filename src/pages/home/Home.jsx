import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import { HomeStyles, Profile, Paragraph } from "./home.styles";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import User1 from "../../Assets/ajibola.svg";
import Image from "../../Assets/image 1.svg";
import Image1 from "../../Assets/image 2.svg";
import User2 from "../../Assets/jida.png";
import User3 from "../../Assets/segadu.png";
import Image2 from "../../Assets/sloth.svg";
import Image3 from "../../Assets/image 3.svg";

const Home = () => {
  return (
    <HomeStyles>
      {/* ===== First post========= */}
      <Profile gap="8px">
        <img src={Logo} alt="" />
        <Paragraph
          width="153px"
          height="28px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="#1f2937"
        >
          Temitayo Ajakore
        </Paragraph>
        <Paragraph
          width="67px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          left="-19px"
        >
          @temmy
        </Paragraph>

        <Paragraph
          width="59px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#1f2937"
          left="420px"
        >
          28 mins
        </Paragraph>
      </Profile>
      <Profile gap="8px">
        <Paragraph
          width="718px"
          height="28px"
          fontSize="18px"
          fontWeight="400"
          lineHeight="28px"
          color="#1f2937"
          top="12px"
        >
          The only way to describe the
        </Paragraph>
        <Paragraph
          width="718px"
          height="28px"
          fontSize="18px"
          fontWeight="400"
          lineHeight="28px"
          color="#1366cf"
          left="-335px"
          top="12px"
        >
          #wowenintechmet
        </Paragraph>
      </Profile>
      <Profile left="208px" top="42px">
        <img src={FirstImage} alt="" />
      </Profile>

      <Profile left="19px" width="718px" height="28px" gap="470px" top="20px">
        <Paragraph
          width="37px"
          height="20px"
          fontSize="14px"
          lineHeight="20px"
          color="#1f2937"
          background="#f3f4f6"
          borderRadius="17px"
        >
          Event
        </Paragraph>
        <Profile
          width="37px"
          height="20px"
          fontSize="16px"
          lineHeight="24px"
          color="#1f2937"
          gap="28px"
        >
          <FavoriteBorderIcon />
          <Paragraph left="-21px">24</Paragraph>
          <MessageIcon />
          <Paragraph left="-21px">1</Paragraph>
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </Profile>
      </Profile>

      {/* ======second post======= */}

      <Profile gap="8px" top="32px">
        <img src={User1} alt="" />
        <Paragraph
          width="153px"
          height="28px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="#1f2937"
        >
          Ajibola Azeez
        </Paragraph>
        <Paragraph
          width="67px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          left="-53px"
        >
          @jbz
        </Paragraph>

        <Paragraph
          width="59px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#1f2937"
          left="450px"
        >
          28 mins
        </Paragraph>
      </Profile>
      <Profile gap="8px" direction="column">
        <Paragraph
          width="718px"
          height="32px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          color="#1f2937"
          top="12px"
        >
          Becoming a sort-after PM
        </Paragraph>
        <Paragraph
          width="718px"
          height="48px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          top="8px"
        >
          The era of building products without a dedicated product manager is
          long gone.
          <br />
          More organization are adopting Product management as a crucial tool in
          the development of their...
        </Paragraph>
      </Profile>
      <Profile left="208px" top="42px">
        <img src={Image} alt="" />
      </Profile>
      <Profile left="19px" width="718px" height="28px" gap="470px" top="20px">
        <Paragraph
          width="37px"
          height="20px"
          fontSize="14px"
          lineHeight="20px"
          color="#1f2937"
          background="#f3f4f6"
          borderRadius="17px"
        >
          PM
        </Paragraph>
        <Profile
          width="37px"
          height="20px"
          fontSize="16px"
          lineHeight="24px"
          color="#1f2937"
          gap="28px"
        >
          <FavoriteBorderIcon />
          <Paragraph left="-21px">24</Paragraph>
          <MessageIcon />
          <Paragraph left="-21px">1</Paragraph>
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </Profile>
      </Profile>

      {/* ======Third post======= */}

      <Profile gap="8px" top="32px">
        <img src={User2} alt="" />
        <Paragraph
          width="153px"
          height="28px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="#1f2937"
        >
          Jida Lawrence
        </Paragraph>
        <Paragraph
          width="67px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          left="-40px"
        >
          @jida
        </Paragraph>

        <Paragraph
          width="59px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#1f2937"
          left="450px"
        >
          1 hr
        </Paragraph>
      </Profile>
      <Profile gap="8px" direction="column">
        <Paragraph
          width="718px"
          height="32px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          color="#1f2937"
          top="12px"
        >
          How To Write Effective Software Release Notes That Delight Users
        </Paragraph>
        <Paragraph
          width="718px"
          height="48px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          top="8px"
        >
          What are good software release notes? I shared the key components and
          examples of what
          <br />
          works or does not work in this article. This is based on my experience
          from multiple produc...
        </Paragraph>
      </Profile>
      <Profile top="42px" left="19px">
        <img src={Image1} alt="" />
      </Profile>
      <Profile left="19px" width="718px" height="28px" gap="470px" top="20px">
        <Paragraph
          width="37px"
          height="20px"
          fontSize="14px"
          lineHeight="20px"
          color="#1f2937"
          background="#f3f4f6"
          borderRadius="17px"
        >
          PM
        </Paragraph>
        <Profile
          width="37px"
          height="20px"
          fontSize="16px"
          lineHeight="24px"
          color="#1f2937"
          gap="28px"
        >
          <FavoriteBorderIcon />
          <Paragraph left="-21px">24</Paragraph>
          <MessageIcon />
          <Paragraph left="-21px">1</Paragraph>
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </Profile>
      </Profile>

      {/* ======Fourth post======= */}

      <Profile gap="8px" top="32px">
        <img src={User3} alt="" />
        <Paragraph
          width="153px"
          height="28px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="#1f2937"
        >
          Saviour Dagadu
        </Paragraph>
        <Paragraph
          width="67px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          left="-40px"
        >
          @mansavy
        </Paragraph>

        <Paragraph
          width="59px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#1f2937"
          left="420px"
        >
          28 mins
        </Paragraph>
      </Profile>
      <Profile gap="8px" direction="column">
        {/* <Paragraph
          width="718px"
          height="32px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          color="#1f2937"
          top="12px"
        >
          Becoming a sort-after PM
        </Paragraph> */}
        <Paragraph
          width="718px"
          height="48px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          top="8px"
        >
          The plan for the weekend is not to think of work. Rest, play, and
          refresh for the
          <br />
          coming week.
        </Paragraph>
      </Profile>
      <Profile left="208px" top="42px">
        <img src={Image2} alt="" />
      </Profile>
      <Profile left="19px" width="718px" height="28px" gap="470px" top="20px">
        <Paragraph
          width="37px"
          height="20px"
          fontSize="14px"
          lineHeight="20px"
          color="#1f2937"
          background="#f3f4f6"
          borderRadius="17px"
        >
          PM
        </Paragraph>
        <Profile
          width="37px"
          height="20px"
          fontSize="16px"
          lineHeight="24px"
          color="#1f2937"
          gap="28px"
        >
          <FavoriteBorderIcon />
          <Paragraph left="-21px">24</Paragraph>
          <MessageIcon />
          <Paragraph left="-21px">1</Paragraph>
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </Profile>
      </Profile>

      {/* ======Fifth post======= */}

      <Profile gap="8px" top="32px">
        <img src={User2} alt="" />
        <Paragraph
          width="153px"
          height="28px"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="#1f2937"
        >
          Solange Spencer
        </Paragraph>
        <Paragraph
          width="67px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          left="-35px"
        >
          @ASA
        </Paragraph>

        <Paragraph
          width="59px"
          height="24px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#1f2937"
          left="430px"
        >
          1 hr
        </Paragraph>
      </Profile>
      <Profile gap="8px" direction="column">
        <Paragraph
          width="718px"
          height="32px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          color="#1f2937"
          top="12px"
        >
          Human-Centered Design Is Broken. Here’s a Better Alternative
        </Paragraph>
        <Paragraph
          width="718px"
          height="48px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="#4b5563"
          top="8px"
        >
          Hear me out for a second: What if we tried bee-centered design?
        </Paragraph>
      </Profile>
      <Profile left="19px" top="42px">
        <img src={Image3} alt="" />
      </Profile>
      <Profile left="19px" width="718px" height="28px" gap="470px" top="20px">
        <Paragraph
          width="37px"
          height="20px"
          fontSize="14px"
          lineHeight="20px"
          color="#1f2937"
          background="#f3f4f6"
          borderRadius="17px"
        >
          PM
        </Paragraph>
        <Profile
          width="37px"
          height="20px"
          fontSize="16px"
          lineHeight="24px"
          color="#1f2937"
          gap="28px"
        >
          <FavoriteBorderIcon />
          <Paragraph left="-21px">24</Paragraph>
          <MessageIcon />
          <Paragraph left="-21px">1</Paragraph>
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </Profile>
      </Profile>
    </HomeStyles>
  );
};

export default Home;
