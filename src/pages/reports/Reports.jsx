import { useState } from "react";
import Styled from "./reports.styles";
// import { ReactComponent as BackSvg } from "../../Assets/images/Back.svg";
// import { ReactComponent as DeleteSvg } from "../../Assets/images/delete_outline.svg";
import userPic from "../../Assets/images/User Profile.png";
import articleImg from "../../Assets/images/article_1.png";
import user1 from "../../Assets/jida.png";
import user2 from "../../Assets/segadu.png";
import user3 from "../../Assets/carl.svg";
import user4 from "../../Assets/aderayo.svg";

const {
  Wrapper, Header, Nav, NavButton, Main, Card
} = Styled;

const navGroup = [
  { id: "0", label: "New", badge: 4 },
  { id: "1", label: "In Progress", badge: 8 },
  { id: "2", label: "Completed", badge: 26 }
];

const Reports = () => {
  const [currNav, setCurrNav] = useState("New");

  return (
    <Wrapper>
      <Header>
        <h1>Reports</h1>

        <Nav>
          {navGroup.map(({ id, label, badge }) => (
            <NavButton key={id} type="button" active={label === currNav} onClick={() => setCurrNav(label)}>
              {label}
              &nbsp;
              <span>{badge}</span>
            </NavButton>
          ))}
        </Nav>
      </Header>

      <Main>
        <Card.Wrapper to={`${1}`}>
          <Card.Header>
            <div className="img-wrapper">
              <img src={userPic} alt="" />
            </div>
            <h3>Solange Spencer</h3>
            <span>@ASA</span>
          </Card.Header>

          <Card.Body>
            <div className="post-content">
              <h4>Why Should Anyone Be Led by You?</h4>
              <p>We all know that leaders need vision and energy. But to be inspirational...</p>
            </div>

            <div className="post-img-wrapper">
              <img src={articleImg} alt="" className="post-img" />
            </div>
          </Card.Body>

          <Card.Footer color="Secondary">
            <div className="badge">Report type</div>

            <div className="reporters">
              {[
                { id: "0", url: user1 },
                { id: "1", url: user2 },
                { id: "2", url: user3 },
                { id: "3", url: user4 }
              ].map(({ id, url }, idx) => (<img key={id} src={url} alt="" style={{ right: idx * 24 }} />))}
            </div>
          </Card.Footer>
        </Card.Wrapper>
      </Main>
    </Wrapper>
  );
};

export default Reports;
