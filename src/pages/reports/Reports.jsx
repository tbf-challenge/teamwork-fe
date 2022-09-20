import { useState } from "react";
import Styled from "./reports.styles";
// import { ReactComponent as BackSvg } from "../../Assets/images/Back.svg";
// import { ReactComponent as DeleteSvg } from "../../Assets/images/delete_outline.svg";
import {
  reporters, badgeMap, data, userPic, articleImg
} from "./reports.data";

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
        {data.map(({
          id, user, report, post
        }) => (
          <Card.Wrapper key={id} to={`${id}`}>
            <Card.Header>
              <div className="img-wrapper">
                <img src={userPic} alt="" />
              </div>
              <h3>{user.full_name}</h3>
              <span>{`@${user.username}`}</span>
            </Card.Header>

            <Card.Body>
              <div className="post-content">
                <h4>{post?.title}</h4>
                <p>{`${post.content.slice(0, 75)}...`}</p>
              </div>

              <div className="post-img-wrapper">
                <img src={articleImg} alt="" className="post-img" />
              </div>
            </Card.Body>

            <Card.Footer>
              <Card.ReportBadge color={badgeMap.get(report.category) ?? "Primary"}>
                {report.category}
              </Card.ReportBadge>

              <div className="reporters">
                {reporters.slice(0, report.reporters.length).map(({ id: iid, url }, idx) => (<img key={iid} src={url} alt="" style={{ right: idx * 24 }} />))}
              </div>
            </Card.Footer>
          </Card.Wrapper>
        ))}
      </Main>
    </Wrapper>
  );
};

export default Reports;
