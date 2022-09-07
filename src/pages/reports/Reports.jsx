import Styled from "./reports.styles";
import { ReactComponent as BackSvg } from "../../Assets/images/Back.svg";
import { ReactComponent as MoreSvg } from "../../Assets/images/more-vertical.svg";
import userPic from "../../Assets/images/User Profile.png";

const {
  Wrapper, Heading, BackButton, Typography, Body, CardsContainer, Card
} = Styled;

const data = [
  {
    id: "0", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 2, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "1", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 4, type: "Harmful speech" }, date: "08/08/2022"
  },
  {
    id: "2", user: { username: "@blessed", fullname: "Blessing F", profileImg: userPic }, reports: { amount: 1, type: "Harmful speech" }, date: "08/08/2022"
  }
];

const Reports = () => {
  return (
    <Wrapper>
      <Heading>
        <BackButton type="button" title="back">
          <BackSvg />
        </BackButton>

        <Typography.NavH1>Reports</Typography.NavH1>
      </Heading>

      <Body>
        <CardsContainer>
          {data.map(({
            id, user, reports, date
          }) => {
            const items = [
              { idx: "0", name: "Username", desc: user.username },
              { idx: "1", name: "No. of Reports", desc: reports.amount },
              { idx: "2", name: "Report type", desc: reports.type },
              { idx: "3", name: "Date", desc: date }
            ];

            return (
              <Card.Wrapper key={id}>
                <Card.Heading>
                  <div>
                    <img src={user.profileImg} alt={user.username} />
                  </div>
                  <span>{user.fullname}</span>
                  <button type="button" title="more">
                    <MoreSvg />
                  </button>
                </Card.Heading>

                <Card.Body>
                  {items.map(({ idx, name, desc }) => (
                    <Card.Item key={idx}>
                      <h5>{name}</h5>
                      <span>{desc}</span>
                    </Card.Item>
                  ))}
                </Card.Body>
              </Card.Wrapper>
            );
          })}
        </CardsContainer>
      </Body>
    </Wrapper>
  );
};

export default Reports;
