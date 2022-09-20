import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styled from "./reportsinfo.styles";
import ReportsStyled from "../reports.styles";
import { ReactComponent as BackSvg } from "../../../Assets/images/chevron_left.svg";
import {
  reporters, badgeMap, data, userPic, articleImg
} from "../reports.data";

const { Card } = ReportsStyled;
const {
  Wrapper, Header, Container, Footer
} = Styled;

const ReportsInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(data?.[+params.id]);
  }, [params]);

  return (
    <Wrapper>
      <Header>
        <button type="button" onClick={() => navigate(-1)}>
          <BackSvg />
          View report
        </button>
      </Header>

      <Container>
        {state && (
          <>
            <Card.Header>
              <div className="img-wrapper">
                <img src={userPic} alt="" />
              </div>
              <h3>{state.user.full_name}</h3>
              <span>{`@${state.user.username}`}</span>
            </Card.Header>

            <Card.Body>
              <div className="post-content">
                <h4>{state.post?.title}</h4>
                <p>{`${state.post.content.slice(0, 100)}...`}</p>
              </div>

              <div className="post-img-wrapper">
                <img src={articleImg} alt="" className="post-img" />
              </div>
            </Card.Body>

            <Footer>
              <div className="categories">
                <h4>Categories:</h4>
                <Card.ReportBadge color={badgeMap.get(state.report.category) ?? "Primary"}>
                  {state.report.category}
                </Card.ReportBadge>
              </div>

              <div className="reporters">
                <h4>Reporters:</h4>
                {reporters.slice(0, state.report.reporters.length).map(({ id: iid, url }, idx) => (
                  <div className="user">
                    <img key={iid} src={url} alt="" />
                    <span>{state.report.reporters[idx].full_name}</span>
                  </div>
                ))}
              </div>

              <div className="type">
                <h4>Content type:</h4>
                <p>{state.post.type}</p>
              </div>
            </Footer>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default ReportsInfo;
