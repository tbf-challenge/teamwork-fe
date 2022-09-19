import { useState } from "react";
import Styled from "./reports.styles";
// import { ReactComponent as BackSvg } from "../../Assets/images/Back.svg";
// import { ReactComponent as DeleteSvg } from "../../Assets/images/delete_outline.svg";
import userPic from "../../Assets/images/User Profile.png";
import articleImg from "../../Assets/images/article_1.png";

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

            <span className="space" />

            <div className="post-img-wrapper">
              <img src={articleImg} alt="" className="post-img" />
            </div>
          </Card.Body>

          <Card.Footer color="Secondary">
            <div className="badge">Report type</div>

            <div className="reporters">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </Card.Footer>
        </Card.Wrapper>
      </Main>
    </Wrapper>
  );
};

export default Reports;
